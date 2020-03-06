import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LivrosListaComponent } from './livros/livros-lista/livros-lista.component';
import { LivrosInformacoesComponent } from './livros/livros-informacoes/livros-informacoes.component';
=======
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
>>>>>>> 7b739c1263eebff487b148ea898f0675f3880846

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LivrosListaComponent,
    LivrosInformacoesComponent
=======
    MenuComponent,
    HomeComponent
>>>>>>> 7b739c1263eebff487b148ea898f0675f3880846
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
