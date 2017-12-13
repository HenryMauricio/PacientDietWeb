
import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-hospitalizacion',
  templateUrl: './hospitalizacion.component.html',
  styleUrls: ['./hospitalizacion.component.css']
})
export class HospitalizacionComponent implements OnInit {

pacientesObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  	 this.pacientesObservable = this.getPacientes('/hospitalizacion');
  }
  getPacientes(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  //getPacienteName(id): Observable<any[]> {
  //	return this.db.list('/paciente'+id);
  //}
}


