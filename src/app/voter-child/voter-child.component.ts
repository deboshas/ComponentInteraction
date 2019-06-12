import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-voter-child',
  templateUrl: './voter-child.component.html',
  styleUrls: ['./voter-child.component.css']
})
export class VoterChildComponent implements OnInit {

  constructor() { }

  @Output() voted = new EventEmitter<boolean>();

  ngOnInit() {
  }

  votedclick(opinion) {
    console.log(opinion);
    this.voted.emit(opinion);

  }



}
