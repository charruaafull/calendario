import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarioComponent} from "./calendario/calendario.component";

const routes: Routes = [
    {
        path: 'calendario',
        component: CalendarioComponent,
        data: { title: 'Heroes List' }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
