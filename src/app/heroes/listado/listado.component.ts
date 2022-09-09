import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderma', 'Batma', 'Wido', ' Hul'];
  borrando: string = '';
  borrandoHeroe() {
    this.borrando= this.heroes.shift()||'';
  }
}
