import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../services/volunteer.service';
import { Activity } from '../common/activity';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  enrollState = "STARTED";

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
    
  }

  // 增加活动
  onSubmit(activity) {
    //console.log(data.value);
    this.volunteerService.addActivity(activity.value).subscribe(
      (data: HttpResponse<Activity>) => {
        alert("添加成功！");
        activity.reset();
      },
      //handle errors here
      (err: HttpResponse<Activity>) => {
        alert("添加失败，请检查数据！");
        // console.log(err.status);
        // console.log(err);
      }
    ); 
  }

}
