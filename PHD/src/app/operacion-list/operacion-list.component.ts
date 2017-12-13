import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-operacion-list',
  templateUrl: './operacion-list.component.html',
  styleUrls: ['./operacion-list.component.css']
})

export class OperacionListComponent implements OnInit {

pacientesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
  		

   }

  ngOnInit() {

  	 this.pacientesObservable = this.getPacientes('/pacienthelpdiet-a07fb/hospitalizacion');
  }

getPacientes(listPath): Observable<any[]> {

    return this.db.list(listPath).valueChanges();
  }

}
