import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { User } from '../common/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  // 增加用户
  onSubmit(user) {
    this.userService.addUser(user.value).subscribe(
      (data: HttpResponse<User>) => {
        alert("添加成功！");
        user.reset();
      },
      //handle errors here
      (err: HttpResponse<User>) => {
        alert("添加失败，请检查数据！");
        // console.log(err.status);
        // console.log(err);
      }
    ); 
  }


}
