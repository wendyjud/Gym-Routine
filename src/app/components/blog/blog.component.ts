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
  form: FormGroup;
  id: string | undefined;
  constructor(private fb:FormBuilder,
    private _blogService:BlogService,
    private toastr: ToastrService) {
    this.form=this.fb.group({
    mensaje:['', Validators.required],
    })
   }
  
  ngOnInit(): void {
    this._blogService.getMensajeEdit().subscribe(data=>{
      console.log(data);
      this.id=data.id;
      this.form.patchValue({
        mensaje:data.mensaje,
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
    }
    this._blogService.editarMensaje(id,MENSAJE).then(()=>{
      this.form.reset();
      this.id=undefined;
      this.toastr.info('Comentario actualizada correctamente')
    },error=>{
      console.log(error);
    })
  }
  agregarMensaje(){
    //console.log(this.form); //podemos ver la salida de los datos
    const MENSAJE: BlogModel={
      mensaje:this.form.value.mensaje,

    }

    //console.log(MENSAJE);
    this._blogService.guardarMensaje(MENSAJE).then(()=>{
      //console.log('Comentario enviado');
      this.toastr.success('Comentario enviado', 'Gracias')
      this.form.reset();
    }, error => {
      this.toastr.error('Opps!, algo salió mal', 'Inténtalo de nuevo');
      console.log(error);
    })

  }
}
