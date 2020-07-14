import { Injectable } from '@angular/core';
import { ServiceFirebase } from '../core/servicefirebase.service';
import { Artigo } from '../models/artigo.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService extends ServiceFirebase<Artigo>  {

  constructor(firestore: AngularFirestore) {
    super(Artigo, firestore, 'artigos');
  }
}
