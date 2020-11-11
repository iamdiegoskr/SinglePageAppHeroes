import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'//para poder navegar

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private _router:Router) { }

  ngOnInit(): void {
  }


  searchHeroe(termino: string){
    //redireccionar a otro componentente y pasarle el parametro termino
    this._router.navigate(['/heroes-filter', termino])
  }

}
