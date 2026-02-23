import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-gestore-partita',
  imports: [CommonModule, InputText],
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
}
