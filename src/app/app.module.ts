import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { HttpClientModule } from '@angular/common/http';
import { VolunteerService } from './services/volunteer.service';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { AddUserComponent } from './add-user/add-user.component';
import { VolunteerManagementComponent } from './volunteer-management/volunteer-management.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ActivityManagementComponent } from './activity-management/activity-management.component';
import { VolunteerActivityListComponent } from './volunteer-activity-list/volunteer-activity-list.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
  {path:'showActivity', component: ActivityComponent}, //管理员查看所有活动
  {path:'showAllActivity', component: VolunteerActivityListComponent}, //用户查看所有活动
  {path:'showMyActivity', component: ActivityManagementComponent}, //我报名的所有会动
  {path:'showUser', component: UserComponent},
  {path:'showUser/:id', component: UserComponent},
  {path:'addActivity', component: AddActivityComponent}, //添加活动
  {path:'updateActivity/:id', component: AddActivityComponent}, //修改活动
  {path:'addUser', component: AddUserComponent}, //新建用户
  {path:'updateMyUser', component: AddUserComponent},//修改我的用户信息
  {path:'updateUser/:id', component: AddUserComponent},
  {path:'manageVolunteer/:id', component: VolunteerManagementComponent},//根据活动管理志愿者
  {path:'addComment/:id', component: AddCommentComponent}, //给志愿者填写评价
  {path:'addFeedback/:id', component: AddCommentComponent}, ////给活动提交反馈
  {path:'updatePassword', component: UpdatePasswordComponent}, ////修改密码
  {path:'login', component: LoginComponent}, //登录
  {path:'', component: HomeComponent} //登录
];

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    UserComponent,
    AddActivityComponent,
    AddUserComponent,
    VolunteerManagementComponent,
    AddCommentComponent,
    ActivityManagementComponent,
    VolunteerActivityListComponent,
    UpdatePasswordComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [VolunteerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
