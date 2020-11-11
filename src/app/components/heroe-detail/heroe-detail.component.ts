import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent {

  heroe : Heroe

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService:HeroesService) {

    //esto regresa un observador
    this.activatedRoute.params.subscribe(params=>{
      this.heroe =this._heroesService.getHeroe(params['id']);
      console.log(this.heroe)
    })
      
  }
}
