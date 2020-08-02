import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoRoutingComponent } from './jogo-da-velha-routing.component';

export const JogoRoutes: Routes = [
  {
    path: 'jogo-da-velha',
    component: JogoRoutingComponent,
    children: [{
      path: '',
      component: JogoDaVelhaComponent
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(JogoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class JogoRoutingModule {

}
