import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';
import { JogoRoutingComponent } from './jogo-da-velha-routing.component';
import { JogoRoutingModule } from './jogo-da-velha-routing.module';

@NgModule({
  declarations: [
    JogoDaVelhaComponent,
    JogoRoutingComponent
  ],
  imports: [
    CommonModule,
    JogoRoutingModule
  ],
  exports: [
    JogoDaVelhaComponent,
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
