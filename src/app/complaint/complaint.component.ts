import {Component, OnInit} from '@angular/core';
import {ApiService} from '../core/api.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor(private _apiService: ApiService) {
  }

  ngOnInit() {
    this._apiService.getComplaints()
      .subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });

  }

}
