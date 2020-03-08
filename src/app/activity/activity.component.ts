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

  constructor(private activityService: VolunteerService, private registerService: RegisterService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.route.paramMap.subscribe(() => {
      this.getAllActivities();
    //});
    
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

  deleteActivity(id: number) {
    this.activityService.deleteActivity(id).subscribe(
      (data: HttpResponse<Activity>) => {
        alert("删除成功！");
        this.getAllActivities();
      },
      //handle errors here
      (err: HttpResponse<Activity>) => {
        alert("删除失败，请稍后重试！");
      }
    )

  }

  

}
