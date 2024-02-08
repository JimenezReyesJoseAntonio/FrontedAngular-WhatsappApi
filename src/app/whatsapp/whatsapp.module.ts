import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageOperadorComponent } from './pages/message-operador/message-operador.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    MessageOperadorComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WhatsappModule { }
