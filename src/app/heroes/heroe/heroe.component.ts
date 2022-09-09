import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['../../app.component.css'],
})
export class HeroeComponent {
  nombre: string = 'ironman';
  edad: number = 23;

  get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }
    
    cambiarNombre():void {
        this.nombre='spiderman';
    }
    cambiarEdad():void {
        this.edad=2;
    }
}
