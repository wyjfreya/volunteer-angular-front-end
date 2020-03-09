import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'volunteer';
  currentUserId = +localStorage.getItem("userId");

  constructor(private router: Router) {}

  isManager() {
    let isManager = localStorage.getItem("isManager");
    return isManager === "1";
  }

  isVolunteer() {
    let isManager = localStorage.getItem("isManager");
    return isManager === "0";
  }

  isLogin() {
    let userId = localStorage.getItem("userId");
    console.log(userId);
    return +userId > 0;
  }

  logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("isManager");
    alert("退出成功！");
    this.router.navigate(['/login']);
  }
}
