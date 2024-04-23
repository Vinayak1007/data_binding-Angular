import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userName:string = '';

  updateUser(){
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName(){
    this.userName='';
  }

}
