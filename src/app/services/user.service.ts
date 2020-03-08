import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8062/user';
  private getAllUsersUrl = this.baseUrl + '/getUsers';
  private addUserUrl = this.baseUrl + '/addUser';
  private userDeleteUrl = this.baseUrl + '/deleteUser';
  private updateUserUrl = this.baseUrl + '/updateUser';

  
  constructor(private httpClient: HttpClient) { }

  //查看所有用户
  getAllUsers(): Observable<User[]> {
    
    return this.httpClient.get<User[]>(`${this.getAllUsersUrl}`);
 
  }

  // 添加一个新用户
  addUser(user: User): Observable<HttpResponse<User>> {

    return this.httpClient.post<User>(`${this.addUserUrl}`,user,{ observe: 'response' }) ;

  }


  deleteUser(userName: String): Observable<HttpResponse<User>> {
    //debugger;
    return this.httpClient.put<User>(`${this.userDeleteUrl}/${userName}`, userName, { observe: 'response' });
  }

  updateUser(user: User): Observable<Response> {
    //debugger;
    return this.httpClient.put<Response>(`${this.updateUserUrl}`, user);
  }

}
