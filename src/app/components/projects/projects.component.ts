import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Site Imobiliária',
      description:
        'Site para visualização, cadastro, edição e exclusão de imóveis (CRUD) utilizando Angular e Bootstrap.',
      link: 'https://jfimoveisitapema.netlify.app/'
    },
    {
      title: 'Dashboard',
      description: 'Dashboard de vendas utilizando React e Tailwind.',
      link: 'https://dashboard-design-example.netlify.app/'
    },
    {
      title: 'Portfólio',
      description: 'Portfólio pessoal utilizando HTML, CSS e JavaScript básico.',
      link: 'https://jvf-portfolio.netlify.app/'
    }
  ];
}
