import { Component, OnInit } from '@angular/core';
import { Register } from '../common/register';
import { RegisterService } from '../services/register.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-activity-management',
  templateUrl: './activity-management.component.html',
  styleUrls: ['./activity-management.component.css']
})
export class ActivityManagementComponent implements OnInit {
  registers: Register[];
  userId = +localStorage.getItem("userId");

  constructor(private registerService: RegisterService) { }
  

  ngOnInit() {
    
    this.getRegisters();
  }

  deleteRegister(id: number) {
    this.registerService.deleteRegister(id).subscribe(
      (data: HttpResponse<String>) => {
        alert("取消报名成功");
        this.getRegisters();
      },
      //handle errors here
      (err: HttpResponse<String>) => {
        console.log(err);
        alert("取消报名失败");
      }
    );
  }

  getRegisters() {

    
    this.registerService.getAllRegister(this.userId).subscribe(
      data => {
        if (!data) {
          this.registers = [];
        } else {
          
          this.registers = data;
        }
        
      }
    )
  }

}
