import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { RutinaModel } from '../models/RutinaModel';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  private rutina$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  guardarRutina(rutina:RutinaModel): Promise<any>{
    return this.firestore.collection('rutinas').add(rutina);
  }

  obtenerRutinas():Observable<any>{
   return  this.firestore.collection('rutinas', ref=>ref.orderBy('nombre', 'asc')).snapshotChanges();

  }
  eliminarRutina(id:string):Promise<any>{
    return this.firestore.collection('rutinas').doc(id).delete();
  }
  editarRutina(id:string, rutina:any):Promise<any>{
   return this.firestore.collection('rutinas').doc(id).update(rutina);
  }

  addRutinaEdit(rutina:RutinaModel){
    this.rutina$.next(rutina);

  }
  getRutinaEdit(): Observable<RutinaModel>{
    return this.rutina$.asObservable();
  }
  obtenerRapidas():Observable<any>{
    return  this.firestore.collection('rapidas', ref=>ref.orderBy('nombre', 'asc')).snapshotChanges();
 
   }

   obtenerPyg():Observable<any>{
    return  this.firestore.collection('pyg', ref=>ref.orderBy('nombre', 'asc')).snapshotChanges();
 
   }

   obtenerCardioc():Observable<any>{
    return  this.firestore.collection('cardio_casa', ref=>ref.orderBy('nombre', 'asc')).snapshotChanges();
 
   }

   obtenerAbdominales():Observable<any>{
    return  this.firestore.collection('abdominales', ref=>ref.orderBy('nombre', 'asc')).snapshotChanges();
 
   }
   obtenerRetos():Observable<any>{
    return  this.firestore.collection('retos', ref=>ref.orderBy('reto', 'desc')).snapshotChanges();
 
   }

   obtenerAsma():Observable<any>{
    return  this.firestore.collection('asma', ref=>ref.orderBy('tipo', 'asc')).snapshotChanges();
 
   }


   
}
