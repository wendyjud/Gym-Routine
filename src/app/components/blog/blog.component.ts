import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BlogModel } from 'src/app/models/BlogModel';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  listMensajes: BlogModel[]=[];
  form: FormGroup;
  id: string | undefined;
  constructor(private fb:FormBuilder,
    private _blogService:BlogService,
    private toastr: ToastrService) {
    this.form=this.fb.group({
    mensaje:['', Validators.required],
    nombre:"Tú",
    imagen:"https://i.pinimg.com/564x/b7/ab/60/b7ab60839ad2b58a6c020b0fb0742efa.jpg",
    })
    
   }
  
  ngOnInit(): void {
    this.obtenerMensajes();
    this._blogService.getMensajeEdit().subscribe(data=>{
      console.log(data);
      this.id=data.id;
      this.form.patchValue({
        mensaje:data.mensaje,
        nombre:data.nombre,
        imagen:data.imagen,
      })
    })
  }
  guardarMensaje(){
    if (this.id=== undefined){//creamos una tarjeta
      this.agregarMensaje();
    }else{ //editamos una tarjeta
      this.editarMensaje(this.id);
    }
    
  }
  editarMensaje(id:string){
    const MENSAJE: BlogModel={
      mensaje:this.form.value.mensaje,
      nombre:this.form.value.nombre,
      imagen:this.form.value.imagen,
    }
    this._blogService.editarMensaje(id,MENSAJE).then(()=>{
      this.form.reset();
      this.id=undefined;
      this.toastr.info('Comentario actualizado correctamente')
    },error=>{
      console.log(error);
    })
  }

  editandoMensaje(mensaje: BlogModel){
    this._blogService.addMensajeEdit(mensaje);
  }

  agregarMensaje(){
    //console.log(this.form); //podemos ver la salida de los datos
    const MENSAJE: BlogModel={
      mensaje:this.form.value.mensaje,
      nombre:this.form.value.nombre,
      imagen:this.form.value.imagen,

    }

    //console.log(MENSAJE);
    this._blogService.guardarMensaje(MENSAJE).then(()=>{
      //console.log('Comentario enviado');
      this.toastr.success('Gracias', 'Tu comentario ha sido enviado')
      this.form.reset();
    }, error => {
      this.toastr.error('Opps!, algo salió mal', 'Inténtalo de nuevo');
      console.log(error);
    })

  }
  obtenerMensajes(){
    this._blogService.obtenerMensajes().subscribe(doc=>{
      this.listMensajes=[];
      doc.forEach((element:any)=>{
        this.listMensajes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });

      });
      console.log(this.listMensajes);
    })
  }

  eliminarMensaje(id:any){
    this._blogService.eliminarMensaje(id).then(()=>{
      this.toastr.error('Comentario eliminado');
    }, error=>{
      this.toastr.error('Oppss! Algo ha salido mal', 'Intenta de nuevo');
      console.log(error);
    })
  }


}
