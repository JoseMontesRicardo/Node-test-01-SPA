import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../User';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [DataService]
  
})
export class LoginComponent implements OnInit {

  newUser : User;
  
  constructor(public router: Router, public DataService: DataService) {}
  
  ngOnInit() {
    this.newUser = new User('','');
  }

  getHome(user) {
    if ( user.email !== '' && user.name !== '' ) {
      this.DataService.createNewUser(user).then(data => {
        console.log(data)
        this.router.navigateByUrl('/home/' + data._id);
      });
    } else {
      alert('Por favor llene los campos!')
    }
  }

}
