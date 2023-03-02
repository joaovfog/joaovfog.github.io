import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  professionalExperiencesTitle = 'EXPERIÊNCIAS PROFISSIONAIS';
  skillsTitle = 'HABILIDADES';
  coursesTitle = 'CURSOS';
  projectsTitle = 'PROJETOS';
  contactTitle = 'CONTATO'

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dialog.open(DialogComponent)
  }

  counter(count: number) {
    return count;
  }
}
