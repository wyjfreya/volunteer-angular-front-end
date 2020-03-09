import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../common/register';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-volunteer-management',
  templateUrl: './volunteer-management.component.html',
  styleUrls: ['./volunteer-management.component.css']
})
export class VolunteerManagementComponent implements OnInit {
  registers: Register[];

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    
    this.registerService.getAllUser().subscribe(
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
        this.getAllUsers();
      },
      //handle errors here
      (err: HttpResponse<Register>) => {
        alert("批准失败，请稍后再试！");
      }
    ); 


  }

}
