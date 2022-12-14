import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() PData: string = '0';
  @Output() childEvent = new EventEmitter();
  constructor() { }

  onChange(value: any) {
    this.childEvent.emit(value);
  }

  ngOnInit() {
  }

}
