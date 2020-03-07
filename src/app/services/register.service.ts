import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Register } from '../common/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8062/register';
  private getAllUserByActivityUrl = this.baseUrl + '/getAllUserByActivity';
  private getAllRegisterByUserUrl = this.baseUrl + '/getAllRegisterByUser';
  private addRegisterUrl = this.baseUrl + '/addRegister';
  

  getAllUser(): Observable<Register[]> {
    return this.httpClient.get<Register[]>(`${this.getAllUserByActivityUrl + '/1'}`);
  }

  getAllRegister(): Observable<Register[]> {
    return this.httpClient.get<Register[]>(`${this.getAllRegisterByUserUrl + '/1'}`);
  }

  addRegister(register: Register): Observable<HttpResponse<Register>> {
    return this.httpClient.post<Register>(`${this.addRegisterUrl}`,register,{ observe: 'response' });
  }

}
