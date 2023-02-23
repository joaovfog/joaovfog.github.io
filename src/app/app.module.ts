import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { HeaderComponent } from './components/header/header.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfessionalExperiencesComponent } from './components/professional-experiences/professional-experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsSectionComponent,
    AboutSectionComponent,
    ProjectsComponent,
    ProfessionalExperiencesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
