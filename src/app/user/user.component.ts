import { Component, OnInit } from '@angular/core';
import { User } from '../common/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  //获取所有用户
  getUsers() {
    this.userService.getAllUsers().subscribe (
      data => {
        if (!data) {
          this.users = [];
        } else {
          this.users = data;
        }
        
      }
    )
  }

  deleteAUser(userName: String) {
    console.log(userName);
    this.userService.deleteUser(userName).subscribe();
  }

  updateAUser(user) {
    console.log(user.value);
    this.userService.updateUser(user.value).subscribe();
  }
}

  


