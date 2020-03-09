import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../services/volunteer.service';
import { Activity } from '../common/activity';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  currentActivityId: number;
  activity: Activity = new Activity();
  activities: Activity[];
  //startTime: Date;

  constructor(private volunteerService: VolunteerService,
    private route: ActivatedRoute, private router: Router) {
    this.datePickerConfig = Object.assign({}, { dateInputFormat: 'YYYY-MM-DD', containerClass:'theme-blue' });
  }

  ngOnInit() {
    const hasCurrentId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCurrentId) {
      this.currentActivityId = +this.route.snapshot.paramMap.get('id');
      this.getActivity(this.currentActivityId);
    }
  }

  getActivity(id) {
    this.volunteerService.getActivity(id).subscribe(
      data => {
        this.activity = data;
        console.log(this.activity);
      }
    )

  }

  // 增加活动
  onSubmit(activityForm: NgForm) {
    let tmp = activityForm.value;
    if (tmp.startTime > tmp.endTime) {
      alert("结束时间不能小于开始时间！");
      return;
    }
    if (tmp.id > 0) {
      this.updateActivity(tmp);
    } else {
      this.createActivity(tmp);
    }
    this.router.navigate(['showActivity']);
    this.getAllActivities();
  }

  createActivity(newActivity: Activity) {
    this.volunteerService.addActivity(newActivity).subscribe(
      (data: HttpResponse<Activity>) => {
        alert("添加成功！");
      },
      //handle errors here
      (err: HttpResponse<Activity>) => {
        alert("添加失败，请检查数据！");
      }
    );
  }

  // 修改活动
  updateActivity(existingActivity: Activity) {
    //console.log(data.value);
    this.volunteerService.updateActivity(existingActivity).subscribe(
      (data: HttpResponse<Activity>) => {
        alert("修改成功！");
        //activity.reset();
      },
      //handle errors here
      (err: HttpResponse<Activity>) => {
        alert("修改失败，请检查数据！");

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

    this.volunteerService.getAcitivities().subscribe (
      data => {
        if (!data) {
          this.activities = [];
        } else {
          this.activities = data;
        }
      }
    )
  }

  isExistingActivity() {
    return this.activity.id > 0;
  }

}
