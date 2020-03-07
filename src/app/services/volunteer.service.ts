import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Activity } from '../common/activity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  private baseUrl = 'http://localhost:8062/activity';
  private getAllActivityUrl = this.baseUrl + '/getAllActivities';
  private addActivityUrl = this.baseUrl + '/addActivity';
  private deleteActivityUrl = this.baseUrl + '/deleteActivity';
  private updateActivityUrl = this.baseUrl + '/updateActivity';

  constructor(private httpClient: HttpClient) { }

  getAcitivities(): Observable<Activity[]> {
    // return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
    //   map(response => response._embedded.activities)
    return this.httpClient.get<Activity[]>(`${this.getAllActivityUrl}`);
 
  }

  // 添加一个新活动
  addActivity(activity: Activity): Observable<HttpResponse<Activity>> {
    //debugger;
    return this.httpClient.post<Activity>(`${this.addActivityUrl}`,activity, { observe: 'response' });
  }
}


// interface GetResponse {
//   _embedded: {
//     activities: Activity[];
//   }
// }
