//importo il sistema delle rotte
import { Routes } from '@angular/router';
//importo i componenti che voglio usare nelle rotte (le pagine a vista)
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GestorePartitaComponent } from './pages/gestore-partita/gestore-partita.component';

//definisco le rotte, associando ad ogni percorso un componente da visualizzare
export const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gestore-partita', component: GestorePartitaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];