import { ServiceService } from './../service.service';
import { usuario } from '../usuarios.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: usuario = {
    id:null,
    email: '',
    senha: ''
  }

  constructor(public service: ServiceService) { }

  ngOnInit(): void {
  }
  
  createUser(): void {
    this.service.create(this.user).subscribe()
  }
}
