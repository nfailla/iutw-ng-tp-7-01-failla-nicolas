import { Component, OnInit } from '@angular/core';
import { User } from '../dao.service';
import { ActivatedRoute } from '@angular/router';
import { DaoService } from '../dao.service';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.css']
})
export class UserDetalleComponent implements OnInit {
  public user: User;
  constructor(
    private route: ActivatedRoute,
    private dao: DaoService,

  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.dao.getUser(id)
      .subscribe(user => this.user = user);
  }

}