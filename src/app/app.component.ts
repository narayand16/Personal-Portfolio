import { Component, OnInit } from '@angular/core';
import { ITemplate } from './models/template.model';
import { profileDetails } from './profile-detail-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personal-portfolio';
  template: ITemplate;

  ngOnInit() {
    this.template = profileDetails;
  }
}
