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
  private getAllUserByActivityUrl = this.baseUrl + '/getAllUserByActivity/';
  private getAllRegisterByUserUrl = this.baseUrl + '/getAllRegisterByUser/';
  private addRegisterUrl = this.baseUrl + '/addRegister';
  private deleteRegisterUrl = this.baseUrl + '/deleteRegister/';
  private updateCommentUrl = this.baseUrl + '/updateComment';
  private updateFeedbackUrl = this.baseUrl + '/updateFeedback';
  private getRegisterUrl = this.baseUrl + '/getRegister/';
  private updateStateUrl = this.baseUrl + '/updateState';
  

  getAllUser(activityId: number): Observable<Register[]> {
    return this.httpClient.get<Register[]>(`${this.getAllUserByActivityUrl}` + activityId);
  }

  getAllRegister(userId: number): Observable<Register[]> {
    return this.httpClient.get<Register[]>(`${this.getAllRegisterByUserUrl}` + userId);
  }

  addRegister(register: Register): Observable<HttpResponse<Register>> {
    return this.httpClient.post<Register>(`${this.addRegisterUrl}`,register,{ observe: 'response' });
  }

  updateComment(register: Register): Observable<HttpResponse<Register>> {
    return this.httpClient.put<Register>(`${this.updateCommentUrl}`,register,{ observe: 'response' });
  }
  updateFeedback(register: Register): Observable<HttpResponse<Register>> {
    return this.httpClient.put<Register>(`${this.updateFeedbackUrl}`,register,{ observe: 'response' });
  }

  deleteRegister(id: number): Observable<HttpResponse<String>>{
    return this.httpClient.delete<String>(`${this.deleteRegisterUrl}` + id,{ observe: 'response' });
  }

  getRegister(id: number): Observable<Register> {
    return this.httpClient.get<Register>(`${this.getRegisterUrl}` + id);
  }

  updateState(register: Register): Observable<HttpResponse<Register>> {
    return this.httpClient.put<Register>(`${this.updateStateUrl}`,register,{ observe: 'response' });
  }
}
