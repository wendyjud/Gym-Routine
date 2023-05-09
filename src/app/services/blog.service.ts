import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { BlogModel } from '../models/BlogModel';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
    private mensaje$ = new Subject<any>();
    constructor(private firestore: AngularFirestore) { }
  // Métodos del servicio
    guardarMensaje(mensaje:BlogModel): Promise<any>{
        return this.firestore.collection('mensaje').add(mensaje);
    }

    obtenerMensajes():Observable<any>{
    return  this.firestore.collection('mensaje', ref=>ref.orderBy('mensaje', 'asc')).snapshotChanges();

    }
    eliminarMensaje(id:string):Promise<any>{
        return this.firestore.collection('mensaje').doc(id).delete();
    }
    editarMensaje(id:string, mensaje:any):Promise<any>{
    return this.firestore.collection('mensaje').doc(id).update(mensaje);
    }

    addMensajeEdit(mensaje:BlogModel){
        this.mensaje$.next(mensaje);

    }
    getMensajeEdit(): Observable<BlogModel>{
        return this.mensaje$.asObservable();
  }
  

}
