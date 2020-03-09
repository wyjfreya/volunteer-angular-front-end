import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { User } from '../common/user';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  currentUserId: number;
  user: User = new User();

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const hasCurrentId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCurrentId) { //修改用户。
      this.currentUserId = +this.route.snapshot.paramMap.get('id');     
    } else {
      if (!this.isManager()) { //不是管理员，是志愿者要修改个人信息，则把他的信息放入表单。
        this.currentUserId = +localStorage.getItem("userId");
      }
    }
    this.getUser(this.currentUserId);

  }

  isManager() {
    return localStorage.getItem("isManager") === "1";
  }

  getUser(id) {
    this.userService.getUserById(id).subscribe (
      data => {
        this.user = data;
        console.log(this.user);
      }
    )

  }

  isCreate() {
    return !(this.user.id > 0);
  }

  // 判断新建还是修改
  onSubmit(userForm: NgForm) {
    if (userForm.value.password != userForm.value.confirmPassword) {
      alert("密码不一致,请重新输入！");
      return;
    }
    let tmp = userForm.value;
    if(tmp.id > 0) {
      this.updateUser(tmp);
    } else {
      this.createUser(tmp);
      userForm.reset();
    }
    
  }

  

  // 增加用户
  createUser(user: User) {
    this.userService.addUser(user).subscribe(
      (data: HttpResponse<User>) => {
        alert("添加成功！");
        if(this.isManager()) {
          this.router.navigate(['showUser']);
        } else {
          this.router.navigate(['login']);
        }
      },
      //handle errors here
      (err: HttpResponse<User>) => {
        alert("添加失败，请检查数据！");
      }
    ); 
  }

  // 修改用户
  updateUser(existingUser: User) {
    this.userService.updateUser(existingUser).subscribe(
      (data: HttpResponse<User>) => {
        alert("修改成功！");
      },
      (err: HttpResponse<User>) => {
        alert("修改失败，请检查数据！");

      }
    ); 
  }


}
