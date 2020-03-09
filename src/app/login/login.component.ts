import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../common/user';
import { NgForm } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { LoginResponse } from '../common/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    this.user.userName = myForm.value.userName;
    this.user.password = myForm.value.password;
    this.login();
  }

  login() {
    this.userService.login(this.user).subscribe(
      (data: HttpResponse<LoginResponse>) => {
        let loginResponse = data.body;
        if (loginResponse.isSuccessful) {
          alert("登录成功！");
          console.log(loginResponse);
          this.user = Object.assign({}, loginResponse.obj);
          //Store user in localstorage.
          localStorage.setItem("userId", this.user.id.toString());
          localStorage.setItem("isManager", this.user.isManager.toString());
          let isManager = localStorage.getItem("isManager");
          //Navigate to activity page based on the role.
          if(isManager === "1") {
            this.router.navigate(['showActivity']);
          } else if( isManager === "0") {
            this.router.navigate(['showAllActivity']);
          } else {
            alert("未知用户类型，请联系管理员！");
          }
      
        } else {
          alert(loginResponse.message);
        }
      },
      //handle errors here
      (err: HttpResponse<LoginResponse>) => {
        alert("登录失败，请检查数据！");
      }
    );
  }


}


