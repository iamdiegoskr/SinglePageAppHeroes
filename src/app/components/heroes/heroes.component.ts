import { Component, OnInit } from '@angular/core';
//importo el servicio si quiero utilizarlo
import { HeroesService, Heroe } from '../../services/heroes.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  myheroes:Heroe[];

  //El constructor se carga antes que el ngOnInit
  constructor(private _heroesSerive : HeroesService ) { 
    
  }

  //el ngOnInit es bastante utilizado cuando ya esta toda la pagina o el componente renderizado, ya esta lista para ser trabajada
  ngOnInit(): void {
    this.myheroes = this._heroesSerive.getHeroes();
    console.log(this.myheroes)
  }

}
