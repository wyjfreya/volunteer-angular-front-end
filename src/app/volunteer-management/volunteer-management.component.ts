import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../common/register';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-volunteer-management',
  templateUrl: './volunteer-management.component.html',
  styleUrls: ['./volunteer-management.component.css']
})
export class VolunteerManagementComponent implements OnInit {
  registers: Register[];
  currentActivityId = +this.route.snapshot.paramMap.get('id');

  constructor(private registerService: RegisterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllUsers(this.currentActivityId);
  }

  getAllUsers(activityId: number) {
    
    this.registerService.getAllUser(activityId ).subscribe(
      data => {
        if (!data) {
          this.registers = [];
        } else {
          
          this.registers = data;
        }
        
      }
    )

  }

  register: Register = new Register();

  aprroveRegister(id: number) {
    this.register.id = id;
    this.register.state = 1;

    this.registerService.updateState(this.register).subscribe(
      (data: HttpResponse<Register>) => {
        alert("批准成功！");
        this.getAllUsers(this.currentActivityId);
      },
      //handle errors here
      (err: HttpResponse<Register>) => {
        alert("批准失败，请稍后再试！");
      }
    ); 


  }

}
