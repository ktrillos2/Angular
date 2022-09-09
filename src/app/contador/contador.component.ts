import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
    <h1> {{ titulo }} </h1>

    <h3>La base es : <strong> {{ base }} </strong></h3>

    <button (click)="acumular(base)">+ {{ base }}</button>

    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
  styleUrls: ['../app.component.css']
})
export class ContadorComponent {
    titulo: string = 'Contador app';
    base: number = 5;
    numero: number = 10;
    
    acumular(valor:number) {
        this.numero+=valor
    }

}
