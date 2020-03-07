import { Component, OnInit } from '@angular/core';
import { Register } from '../common/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-activity-management',
  templateUrl: './activity-management.component.html',
  styleUrls: ['./activity-management.component.css']
})
export class ActivityManagementComponent implements OnInit {
  registers: Register[];

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.getRegisters();
  }

  getRegisters() {
    
    this.registerService.getAllRegister().subscribe(
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
