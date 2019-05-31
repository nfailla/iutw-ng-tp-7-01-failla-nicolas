import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetalleComponent } from './user-detalle/user-detalle.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  { path: 'detalle/:id', component: UserDetalleComponent },
  { path: '', component: UserslistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
