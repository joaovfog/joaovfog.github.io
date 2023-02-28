import { Component, Input } from '@angular/core';

export interface Course {
  title: string;
  date: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  @Input() title: string | undefined;
  
  courses: Course[] = [
    { title: 'Certificado do Curso de Inglês na Wizard', date: 'mar 2015' },
    { title: 'Angular Crash Course for Busy Developers', date: 'jun 2019' }
  ]
}
