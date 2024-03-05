import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule}from '@angular/forms';



//Angular
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


//componentes creados
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './components/home/home.component';


import { RouterModule } from '@angular/router';
import { CrearRutinaComponent } from './components/crear-rutina/crear-rutina.component';

import { ListarRutinasComponent } from './components/listar-rutinas/listar-rutinas.component';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';


import { QuemagrasaComponent } from './components/rutinas/rutinas_rapidas/quemagrasa/quemagrasa.component';
import { PiernaYGlueteoComponent } from './components/rutinas/rutinas_rapidas/pierna-y-glueteo/pierna-y-glueteo.component';
import { CardioEnCasaComponent } from './components/rutinas/rutinas_rapidas/cardio-en-casa/cardio-en-casa.component';
import { AbdominalesComponent } from './components/rutinas/rutinas_rapidas/abdominales/abdominales.component';
import { CinturaComponent } from './components/rutinas/rutinas_rapidas/cintura/cintura.component';
import { RetosComponent } from './components/rutinas/retos/retos.component';
import { PectoralesComponent } from './components/ejercicios/pectorales/pectorales.component';
import { RegisterComponent } from './components/register/register.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { RestriccionesGuard } from './guards/restricciones.guard';
import { PiernaComponent } from './components/ejercicios/pierna/pierna.component';
import { TricepsComponent } from './components/ejercicios/triceps/triceps.component';
import { AbdomenComponent } from './components/ejercicios/abdomen/abdomen.component';
import { AntebrazoComponent } from './components/ejercicios/antebrazo/antebrazo.component';
import { BicepsComponent } from './components/ejercicios/biceps/biceps.component';
import { GluteosComponent } from './components/ejercicios/gluteos/gluteos.component';
import { EspaldaComponent } from './components/ejercicios/espalda/espalda.component';
import { EstiramientosComponent } from './components/estiramientos/estiramientos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { AsmaComponent } from './components/actividades/asma/asma.component';
import { AsmaCalComponent } from './components/actividades/asma/asma-cal/asma-cal.component';
import { RespiracionComponent } from './components/actividades/asma/respiracion/respiracion.component';
import { AutocontrolComponent } from './components/actividades/asma/autocontrol/autocontrol.component';
import { CardioCalComponent } from './components/actividades/cardiovascular/cardio-cal/cardio-cal.component';
import { DiabetesCalComponent } from './components/actividades/diabetes/diabetes-cal/diabetes-cal.component';
import { DiabetesEComponent } from './components/actividades/diabetes/diabetes-e/diabetes-e.component';




@NgModule({
  declarations: [
    AppComponent,
    RutinasComponent,
    NavbarComponent,
    EjerciciosComponent,
    BlogComponent,
    IniciarSesionComponent,
    HomeComponent,
    CrearRutinaComponent,
   
    ListarRutinasComponent,
         QuemagrasaComponent,
         PiernaYGlueteoComponent,
         CardioEnCasaComponent,
         AbdominalesComponent,
         CinturaComponent,
         RetosComponent,
         PectoralesComponent,
         RegisterComponent,
         PiernaComponent,
         TricepsComponent,
         AbdomenComponent,
         AntebrazoComponent,
         BicepsComponent,
         GluteosComponent,
         EspaldaComponent,
         EstiramientosComponent,
         ActividadesComponent,
         AsmaComponent,
         AsmaCalComponent,
         RespiracionComponent,
         AutocontrolComponent,
         CardioCalComponent,
         DiabetesCalComponent,
         DiabetesEComponent,
      
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,


    HotToastModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path:'home', component:HomeComponent},
      { path: 'rutinas', component: RutinasComponent },
      { path: 'ejercicios', component: EjerciciosComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'inicio-sesion', component: IniciarSesionComponent },
      { path: 'register', component:RegisterComponent},
      
      { path: 'crear-rutina', component:CrearRutinaComponent, canActivate:[RestriccionesGuard]},
      { path: 'listar-rutinas', component: ListarRutinasComponent, canActivate:[RestriccionesGuard]},

      { path: 'quemagrasa', component: QuemagrasaComponent},
      { path: 'pierna-y-gluteo', component:PiernaYGlueteoComponent},
      { path: 'cardio-en-casa', component:CardioEnCasaComponent},
      { path: 'abdominales', component:AbdominalesComponent},
      
      {path: 'retos', component:RetosComponent},
      {path: 'estiramientos',component:EstiramientosComponent},

      {path: 'pectorales', component:PectoralesComponent},
      {path: 'antebrazo', component:AntebrazoComponent},
      {path: 'abdomen', component:AbdomenComponent },
      {path: 'biceps', component: BicepsComponent},
      {path: 'espalda', component: EspaldaComponent },
      {path: 'gluetos', component:GluteosComponent },
      {path: 'pectorales', component: PectoralesComponent},
      {path: 'pierna', component:PiernaComponent },
      {path: 'triceps', component: TricepsComponent},

      {path: 'actividades-especiales', component: ActividadesComponent},
      {path: 'asma', component: AsmaComponent},
      {path: 'calentamiento-asma', component: AsmaCalComponent},
      {path: 'respiracion', component: RespiracionComponent},
      {path: 'autocontrol', component: AutocontrolComponent},
      {path: 'cardiovascular-cal', component: CardioCalComponent},

      {path: 'diabetes-cal', component: DiabetesCalComponent},
      {path: 'diabetes-e', component: DiabetesEComponent},
      
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
