import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'serial', loadChildren: './home/serial/serial.module#SerialPageModule' },
  { path: 'bajka', loadChildren: './home/bajka/bajka.module#BajkaPageModule' },
  { path: 'film', loadChildren: './home/film/film.module#FilmPageModule' },
  { path: 'dokument', loadChildren: './home/dokument/dokument.module#DokumentPageModule' },
  { path: 'komedia', loadChildren: './home/film/komedia/komedia.module#KomediaPageModule' },
  { path: 'thriller', loadChildren: './home/film/thriller/thriller.module#ThrillerPageModule' },
  { path: 'horror', loadChildren: './home/film/horror/horror.module#HorrorPageModule' },
  { path: 'romantyczna', loadChildren: './home/film/komedia/romantyczna/romantyczna.module#RomantycznaPageModule' },
  { path: 'akcja', loadChildren: './home/film/akcja/akcja.module#AkcjaPageModule' },
  { path: 'koniec', loadChildren: './koniec/koniec.module#KoniecPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
