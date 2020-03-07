import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../services/volunteer.service';
import { Activity } from '../common/activity';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Register } from '../common/register';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-activity',
  templateUrl: './activity-grid.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  
  activities: Activity[];
  currentUserId: number;
  registerToAdd: Register;
  constructor(private activityService: VolunteerService, private registerService: RegisterService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.route.paramMap.subscribe(() => {
      this.getAllActivities();
    //});
    
  }

  addRegister() {
    this.registerToAdd = new Register();
    this.registerToAdd.userId = 1;
    this.registerToAdd.activityId = 1;
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

  getAllActivities() {
    //check if "userid" parameter is available
    //const hasActivityId: boolean = this.route.snapshot.params.has('id');
    // if (hasActivityId) {
    //   this.currentUserId = +this.route.snapshot.params.get('id');
    // } else {

    // }

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

}
