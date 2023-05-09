export class BlogModel {
    id?:string;
    mensaje: string;
    nombre: string;
    imagen: string;

    constructor(mensaje: string, nombre: string, imagen: string){
        //this.categoria=categoria;
        this.mensaje=mensaje;
        this.nombre=nombre;
        this.imagen=imagen;
    }
  }
  