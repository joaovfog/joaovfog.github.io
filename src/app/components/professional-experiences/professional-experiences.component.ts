import { Component } from '@angular/core';

export interface ProfessionalExperience {
  title: string;
  date: string;
  companyName: string;
  city: string;
  state: string;
  description: string;
}

@Component({
  selector: 'app-professional-experiences',
  templateUrl: './professional-experiences.component.html',
  styleUrls: ['./professional-experiences.component.css'],
})
export class ProfessionalExperiencesComponent {
  professionalExperiences: ProfessionalExperience[] = [
    {
      title: 'Desenvolvedor Frontend',
      date: 'mai 2021 - atual',
      companyName: 'CIGAM',
      city: 'Cruz Alta',
      state: 'RS',
      description:
        'Responsável pela criação de telas e manutenção de sistemas web e aplicativos, utilizando tecnologias como React, Material UI, Ant Design e outras ferramentas.',
    },
    {
      title: 'Desenvolvedor Frontend',
      date: 'jun 2019 - out 2019',
      companyName: 'Conecta Ijuí',
      city: 'Ijuí',
      state: 'RS',
      description:
        'Responsável pela criação de telas, utilizando tecnologias como Angular e Bootstrap, bem como outras ferramentas.',
    },
    {
      title: 'Desenvolvedor Frontend',
      date: 'ago 2020 - jan 2021',
      companyName: 'JF Imóveis',
      city: 'Cruz Alta',
      state: 'RS',
      description:
        'Responsável pelo frontend na construção de um site para a imobiliária JF Imóveis, utilizando Angular e Bootstrap.',
    },
    {
      title: 'Preparador de Dados',
      date: 'abr 2019 - mai 2019',
      companyName: 'Mérito Engenharia de Software',
      city: 'Ijuí',
      state: 'RS',
      description:
        'Responsável pela manutenção de sistemas desktop utilizando a linguagem Java.',
    }
  ];
}
