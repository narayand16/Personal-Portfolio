import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
  }

  openInNewTab() {
    // window.open('https://www.drive.google.com');
    window.open('https://drive.google.com/file/d/1SjgwQem1gpxhDnMtacSUenybZioEf-UB/view?usp=sharing');
  }

}
