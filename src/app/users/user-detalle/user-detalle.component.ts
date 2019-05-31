import { Component, OnInit } from '@angular/core';
import { User } from '../dao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.css']
})
export class UserDetalleComponent implements OnInit {
  public user: User;
  constructor() { }

  ngOnInit() {
    //this.getUser();
  }

  /*TODO: getUser()*/

}