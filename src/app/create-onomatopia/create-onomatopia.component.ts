import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {

  constructor() { }

  newOnomatopia! :string;

  @Output()
  public sendOnomatopiaToParent1 = new EventEmitter<any>();

  createOnomatopia() {
    console.log(this.newOnomatopia);
    //this.newOnomatopia="test";
    this.sendOnomatopiaToParent1.emit(this.newOnomatopia);
  }

  ngOnInit(): void {
  }

}
