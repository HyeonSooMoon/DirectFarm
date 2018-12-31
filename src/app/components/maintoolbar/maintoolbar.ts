import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'maintoolbar-comp',
  templateUrl: 'maintoolbar.html',
  styleUrls:['maintoolbar.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainToolbarComponent {

  constructor(){
  }

  @Input('title') title = "";
  @Input('searchtool') searchtool = false;
  @Input('searchplace') searchplace = "검색";

}
