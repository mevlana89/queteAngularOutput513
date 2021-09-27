import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public onomatopoeias : string[] = ["onomatopia1","ono2"];

  onReceiveNewOnomatopia(onomatopia: any):void  {
    //this.onomatopoeias=undefined;
    console.log("onReceiveNewOnomatopia");
    this.onomatopoeias.push(onomatopia);
    
    console.log(this.onomatopoeias);
  }
}
