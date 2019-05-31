import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { UsersRoutingModule } from './users-routing.module';
import { UserslistComponent } from './userslist/userslist.component';
import { UserDetalleComponent } from './user-detalle/user-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule
  ],
  declarations: [
    UserslistComponent,
    UserDetalleComponent
  ],
  exports: [
    UserslistComponent
  ]
})
export class UsersModule { }
