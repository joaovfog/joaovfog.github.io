import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api =
    'https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail';

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    return this.http.post(this.api, data, { responseType: 'text' }).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
