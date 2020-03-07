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
const routes: Routes = [
  {path:'showActivity', component: ActivityComponent},
  {path:'showActivity/:userId', component: ActivityManagementComponent},
  {path:'showUser', component: UserComponent},
  {path:'showUser/:id', component: UserComponent},
  {path:'addActivity', component: AddActivityComponent},
  {path:'addUser', component: AddUserComponent},
  {path:'addUser/:userId', component: AddUserComponent},
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
    ActivityManagementComponent
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
