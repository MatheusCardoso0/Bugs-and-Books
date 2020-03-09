import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosListaComponent } from './livros/livros-lista/livros-lista.component';
import { LivrosInformacoesComponent } from './livros/livros-informacoes/livros-informacoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
  // { path: '', component: LivrosListaComponent },
  // { path: '', component: LivrosInformacoesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
