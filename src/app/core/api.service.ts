import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import Complaint from './models/complaint.model';
import {ENV} from './env.config';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient,
              private auth: AuthService) {
  }

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  getComplaints(): Observable<Complaint[]> {
    return this.http
      .get<Complaint[]>(`${ENV.BASE_API}complaints`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      });
  }
}
