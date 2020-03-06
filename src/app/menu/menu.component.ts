import { Component, OnInit, ElementRef, ViewChild, Pipe } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //acha o botão/menu que vc quer que não apareça sem estar logado
  @ViewChild('botaoAdm', { static: false }) ref: ElementRef;

  usuario: any;
  isBotaoAdm = false;

  constructor(  ) { }

  ngOnInit(): void { }

}
