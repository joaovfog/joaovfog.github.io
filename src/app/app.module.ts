import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card'
import { MatProgressBarModule } from '@angular/material/progress-bar'

import { HeaderComponent } from './components/header/header.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfessionalExperiencesComponent } from './components/professional-experiences/professional-experiences.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsSectionComponent,
    AboutSectionComponent,
    ProjectsComponent,
    ProfessionalExperiencesComponent,
    CoursesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatGridListModule, MatCardModule, MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
