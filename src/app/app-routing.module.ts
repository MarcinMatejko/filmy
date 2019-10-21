import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {OptionSelectorPage} from './option-selector/option-selector.page';
import {IonicModule} from '@ionic/angular';
import {KoniecPage} from './koniec/koniec.page';
import {CommonModule} from '@angular/common';
import {ChoicePresenterComponent} from './choice-presenter/choice-presenter.component';

const routes: Routes = [
  { path: '', redirectTo: 'selector/home', pathMatch: 'full' },
  { path: 'selector/koniec', component: KoniecPage },
  { path: 'selector/:id', component: OptionSelectorPage }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    IonicModule,
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [
      ChoicePresenterComponent,
      KoniecPage,
      OptionSelectorPage
  ]
})
export class AppRoutingModule { }
