import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './whatsapp/pages/inicio/inicio.component';
import { MessageOperadorComponent } from './whatsapp/pages/message-operador/message-operador.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent,
    pathMatch:'full'
  },
  {
    path:'message-operador',
    component: MessageOperadorComponent,
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
