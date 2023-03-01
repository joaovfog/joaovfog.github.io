import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes do material design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

//componentes da aplicacao
import { HeaderComponent } from './components/header/header.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfessionalExperiencesComponent } from './components/professional-experiences/professional-experiences.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsSectionComponent,
    AboutSectionComponent,
    ProjectsComponent,
    ProfessionalExperiencesComponent,
    CoursesComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
