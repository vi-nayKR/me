import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GamingComponent } from './components/gaming/gaming.component';
import { SetupComponent } from './components/setup/setup.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { CursorComponent } from './components/cursor/cursor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    GamingComponent,
    SetupComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent,
    ParticlesComponent,
    CursorComponent,
  ],
  template: `
    <div class="noise relative">
      <app-cursor />
      <app-particles />
      <app-navbar />
      <main>
        <app-hero />
        <app-about />
        <app-skills />
        <app-experience />
        <app-projects />
        <app-certifications />
        <app-contact />
        <app-gaming />
        <app-setup />
      </main>
      <app-footer />
    </div>
  `,
})
export class AppComponent {}

