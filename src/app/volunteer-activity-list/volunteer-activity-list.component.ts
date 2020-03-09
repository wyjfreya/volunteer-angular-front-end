import { Component, OnInit } from '@angular/core';
import { Register } from '../common/register';
import { HttpResponse } from '@angular/common/http';
import { RegisterService } from '../services/register.service';
import { VolunteerService } from '../services/volunteer.service';
import { Activity } from '../common/activity';
import { Statement } from '@angular/compiler';

@Component({
  selector: 'app-volunteer-activity-list',
  templateUrl: './volunteer-activity-list.component.html',
  styleUrls: ['./volunteer-activity-list.component.css']
})
export class VolunteerActivityListComponent implements OnInit {
  registerToAdd: Register;
  activities: Activity[];
  constructor(private activityService: VolunteerService, private registerService: RegisterService) { }

  ngOnInit() {
    this.getAllActivities();
  }



  getAllActivities() {

    this.activityService.getAcitivities().subscribe (
      data => {
        if (!data) {
          this.activities = [];
        } else {
          this.activities = data;
        }
        
      }
    )
  }


  addRegister(activityId: number) {
    this.registerToAdd = new Register();
    let currentId = +localStorage.getItem("userId");
    this.registerToAdd.userId = currentId;
    this.registerToAdd.activityId = activityId;
    this.registerService.addRegister(this.registerToAdd).subscribe(
      (data: HttpResponse<Register>) => {
        alert("报名成功！");
      },
      //handle errors here
      (err: HttpResponse<Register>) => {
        alert("您已经报过名，请勿重复报名！");
        // console.log(err.status);
        // console.log(err);
      }
    ); 

  }

}
