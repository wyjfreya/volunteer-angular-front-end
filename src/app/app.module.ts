import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { HttpClientModule } from '@angular/common/http';
import { VolunteerService } from './services/volunteer.service';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { AddUserComponent } from './add-user/add-user.component';
import { VolunteerManagementComponent } from './volunteer-management/volunteer-management.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ActivityManagementComponent } from './activity-management/activity-management.component';
import { VolunteerActivityListComponent } from './volunteer-activity-list/volunteer-activity-list.component';

const routes: Routes = [
  {path:'showActivity', component: ActivityComponent}, //管理员查看所有活动
  {path:'showAllActivity', component: VolunteerActivityListComponent}, //用户查看所有活动
  {path:'showActivity/:userId', component: ActivityManagementComponent}, //我报名的所有会动
  {path:'showUser', component: UserComponent},
  {path:'showUser/:id', component: UserComponent},
  {path:'addActivity', component: AddActivityComponent}, //添加活动
  {path:'updateActivity/:id', component: AddActivityComponent}, //修改活动
  {path:'addUser', component: AddUserComponent}, //新建用户
  {path:'updateUser/:id', component: AddUserComponent},
  {path:'manageVolunteer', component: VolunteerManagementComponent},
  {path:'addComment', component: AddCommentComponent}
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
    VolunteerActivityListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VolunteerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
