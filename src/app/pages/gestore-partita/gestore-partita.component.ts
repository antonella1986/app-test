import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputText } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-gestore-partita',
  standalone: true,
  imports: [
    CommonModule,
    InputText,
    CarouselModule,
    ButtonModule,
    TagModule
  ],
  templateUrl: './gestore-partita.component.html',
  styleUrl: './gestore-partita.component.scss'
})

export class GestorePartitaComponent {
  //variabile per mostrare o nascondere il form di creazione del personaggio (inizialmente è nascosto, quindi è false)
  mostraCreaPersonaggio = false;
  //funzione per mostrare o nascondere il form di creazione del personaggio
  creaPersonaggio() {
    //inverte il valore di mostraCreaPersonaggio (se è true diventa false, se è false diventa true)
    this.mostraCreaPersonaggio = !this.mostraCreaPersonaggio;
  }

  //array dei personaggi
  personaggi = [
    {
      id: 1,
      nome: 'Guerriero',
      vita: 100,
      danno: 5,
      probabilita: 60,
      image: '/assets/img/guerriero.png',
    },
    {
      id: 2,
      nome: 'Mago',
      vita: 90,
      danno: 4,
      probabilita: 60,
      image: '/assets/img/mago.png',
    },
    {
      id: 3,
      nome: 'Arciere',
      vita: 95,
      danno: 4,
      probabilita: 60,
      image: '/assets/img/arciere.png',
    }
  ];

  // 🔹 Responsive options
  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '992px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  //serve per il tag, in base allo stato del prodotto (instock, lowstock, outofstock) restituisce una classe css diversa (success, warning, danger)
  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}