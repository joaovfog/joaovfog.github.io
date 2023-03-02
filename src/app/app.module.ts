import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

//componentes da aplicacao
import { HeaderComponent } from './components/header/header.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfessionalExperiencesComponent } from './components/professional-experiences/professional-experiences.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactService } from './service/contact.service';

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
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
