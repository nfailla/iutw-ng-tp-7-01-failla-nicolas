import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetalleComponent } from './user-detalle/user-detalle.component';

const routes: Routes = [
  { path: 'detalle/:id', component: UserDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
