import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html',
  styleUrls: ['./heroes-filter.component.css']
})
export class HeroesFilterComponent implements OnInit {

  heroesFilter:Heroe[];
  termino:string;

  constructor(private serviceHeroes:HeroesService,
              private activatedRoute:ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(param=>{
      this.heroesFilter = this.serviceHeroes.filterHeroes(param['termino']);
      this.termino = param['termino'];
    })

  }

  navigateHero(id:number){
    this._router.navigate(['/heroe-detail', id]);
  }

}
