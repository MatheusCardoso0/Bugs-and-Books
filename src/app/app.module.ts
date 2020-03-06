import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LivrosListaComponent } from './livros/livros-lista/livros-lista.component';
import { LivrosInformacoesComponent } from './livros/livros-informacoes/livros-informacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrosListaComponent,
    LivrosInformacoesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
