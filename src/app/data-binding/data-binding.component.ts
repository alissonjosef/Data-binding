import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://www.google.com';
  urlImagen = 'https://lh3.googleusercontent.com/proxy/4ab53N9m2SYCjkAhCaOgY7rdHVyRKdndUnwapeGhmLAeyuekhx92NkW3EQrPDybWQ1aUqrdH5EmYKKP0md2zwHCMRngDFzSHoo9Uq4TjAGISX_G8Vpb6Qqw0Dz86i3A3ZfMrTkd-4NXK98CeFeEF8ODGbDkF_VA_Rp3FhsshWgvdDDV5KOz51C3AYDORcw0ghNnudQ7KfAwnIxcCz205uSM5tz2D1-6KsMKBcEmfU0lAMg';
  
  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'alisson',
    idade: 29
  }

  getValor(){
    return 1;
  }

  getCurrtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }

  salvarValor(valor){
    this.valorSalvo = valor
  }
 
  onKeyUp(evento: KeyboardEvent) {
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }


  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
