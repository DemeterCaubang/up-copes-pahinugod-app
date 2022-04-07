import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private inBrowser: InAppBrowser) { }

  opentab1(){
    this.inBrowser.create("https://pahinungod.upou.edu.ph",'_self');
  }

  opentab2(){
    this.inBrowser.create("https://pahinungod.upou.edu.ph",'_self');
  }

  ngOnInit() {
  }

}
