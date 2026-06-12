import { Component, OnInit, OnDestroy, signal, HostListener, PLATFORM_ID, Inject, DestroyRef, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (!isTouch()) {
      <!-- Outer glowing circle (lagging trailing effect) -->
      <div
        #outerRing
        class="fixed rounded-full pointer-events-none z-[9999] border mix-blend-screen bg-accent/5"
        style="width: 24px; height: 24px; left: 0; top: 0; opacity: 0; transform: translate3d(-100px, -100px, 0); will-change: transform; transition: opacity 0.3s ease, width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.3s ease;"
      ></div>

      <!-- Inner active dot (instant cursor position) -->
      <div
        #innerDot
        class="fixed w-2 h-2 bg-frost rounded-full pointer-events-none z-[10000]"
        style="left: 0; top: 0; opacity: 0; transform: translate3d(-100px, -100px, 0); will-change: transform; transition: opacity 0.3s ease;"
      ></div>
    }
  `,
})
export class CursorComponent implements OnInit, OnDestroy {
  @ViewChild('outerRing') outerRing?: ElementRef<HTMLDivElement>;
  @ViewChild('innerDot') innerDot?: ElementRef<HTMLDivElement>;

  // Target positions (pure properties for 60fps loop performance)
  private mouseX = -100;
  private mouseY = -100;
  private trailX = -100;
  private trailY = -100;

  private isHovered = false;
  private isVisible = false;
  isTouch = signal(false);

  private animFrameId?: number;
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private destroyRef: DestroyRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      // Cleanup custom pointer class on destroy
      this.destroyRef.onDestroy(() => {
        document.documentElement.classList.remove('custom-cursor-active');
      });
    }
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    this.checkDeviceType();
    if (this.isTouch()) return;

    // Start native frame anim rendering loop
    this.animate();
  }

  ngOnDestroy() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  private checkDeviceType() {
    const hasTouch = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      (window.matchMedia && window.matchMedia('(hover: none)').matches);
    this.isTouch.set(hasTouch);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isTouch()) return;

    if (!this.isVisible) {
      this.isVisible = true;
      // Anchor trail to prevent top-left jumping
      this.trailX = event.clientX;
      this.trailY = event.clientY;
      document.documentElement.classList.add('custom-cursor-active');
    }

    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    // Interactive element detection
    const target = event.target as HTMLElement | null;
    if (target) {
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null || 
        target.classList.contains('cursor-pointer') || 
        target.closest('.card-hover') !== null ||
        target.closest('[appTilt]') !== null;

      this.isHovered = !!isInteractive;
    }
  }

  @HostListener('window:mouseout', ['$event'])
  onMouseLeaveWindow(event: MouseEvent) {
    if (!event.relatedTarget && !event.toElement) {
      this.isVisible = false;
      document.documentElement.classList.remove('custom-cursor-active');
    }
  }

  private animate = () => {
    // Smoother trail deceleration factor
    const lerpSpeed = 0.08;
    this.trailX += (this.mouseX - this.trailX) * lerpSpeed;
    this.trailY += (this.mouseY - this.trailY) * lerpSpeed;

    if (this.innerDot && this.outerRing) {
      const innerEl = this.innerDot.nativeElement;
      const outerEl = this.outerRing.nativeElement;

      // Handle visibility transitions
      if (this.isVisible) {
        innerEl.style.opacity = '1';
        outerEl.style.opacity = '1';
      } else {
        innerEl.style.opacity = '0';
        outerEl.style.opacity = '0';
      }

      const ringOffset = this.isHovered ? 24 : 12;

      // GPU-accelerated translation styles (translate3d)
      innerEl.style.transform = `translate3d(${this.mouseX - 4}px, ${this.mouseY - 4}px, 0)`;
      outerEl.style.transform = `translate3d(${this.trailX - ringOffset}px, ${this.trailY - ringOffset}px, 0)`;

      // Dynamic sizing and styling matching active hover configurations
      const accentRGB = getComputedStyle(document.documentElement).getPropertyValue('--color-accent-rgb').trim() || '255, 107, 0';
      if (this.isHovered) {
        outerEl.style.width = '48px';
        outerEl.style.height = '48px';
        outerEl.style.boxShadow = `0 0 20px rgba(${accentRGB}, 0.4)`;
        outerEl.style.borderColor = `rgba(${accentRGB}, 0.8)`;
      } else {
        outerEl.style.width = '24px';
        outerEl.style.height = '24px';
        outerEl.style.boxShadow = 'none';
        outerEl.style.borderColor = `rgba(${accentRGB}, 0.5)`;
      }
    }

    this.animFrameId = requestAnimationFrame(this.animate);
  };
}
