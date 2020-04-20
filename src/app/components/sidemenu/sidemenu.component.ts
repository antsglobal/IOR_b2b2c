import { Component, OnInit } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.css"]
})
export class SidemenuComponent implements OnInit {
  
  faChartPie = faChartPie;
  faWifi = faWifi;
  constructor() {
  }

  ngOnInit() {
  }
}
