import { Component, Input } from '@angular/core';

export interface Skills {
  title: string;
  level: string;
}

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  @Input() title: string | undefined;

  skills: Skills[] = [
    { title: 'HTML', level: '80' },
    { title: 'CSS', level: '80' },
    { title: 'JavaScript', level: '80' },
    { title: 'React', level: '80' },
    { title: 'Angular', level: '70' },
    { title: 'Material UI', level: '80' },
    { title: 'Tailwind', level: '70' },
    { title: 'Bootstrap', level: '70' },
  ]
}
