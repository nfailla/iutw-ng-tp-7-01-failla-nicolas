import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { UserDetalleComponent } from './users/user-detalle/user-detalle.component';

const routes: Routes = [	
  // { path: 'detalle/:id', component: UserDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false , enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
