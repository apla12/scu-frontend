import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioAddComponent } from './usuario/usuario-add/usuario-add.component';


const routes: Routes = 
[
    
  { path: '', redirectTo : '/list', pathMatch: 'full' },
  { path: 'add' , component: UsuarioAddComponent },
  { path: 'list', component: UsuarioListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
