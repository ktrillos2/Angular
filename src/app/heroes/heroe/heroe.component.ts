import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})


export class HeroeComponent{
    nombre: string = 'ironman';
    edad: number = 23;
}