import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../common/register';

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

}
