import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../common/user';
import { HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  currentId: number;
  user: User = new User();

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.currentId = +localStorage.getItem("userId");
  }


  onSubmit(commentForm: NgForm) {
    if (commentForm.value.password != commentForm.value.comfirmPassword) {
      alert("密码不一致,请重新输入！");
      return;
    }
    this.user.id = this.currentId;
    this.user.password = commentForm.value.password;
    this.userService.updatePassword(this.user).subscribe(
      (data: HttpResponse<User>) => {
        alert("修改成功！");
        commentForm.reset();
      },
      (err: HttpResponse<User>) => {
        alert("修改失败，请检查数据！");

      }
    ); 
  }

}
