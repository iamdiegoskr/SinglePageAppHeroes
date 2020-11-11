import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() IdHeroe : number;

  @Output() heroeSelected: EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  navigateHero(){ // <- desde aqui quiero llamar a la funcion del padre
    // this.router.navigate(['/heroe-detail', this.IdHeroe]);
    this.heroeSelected.emit(this.IdHeroe);
  }

}
