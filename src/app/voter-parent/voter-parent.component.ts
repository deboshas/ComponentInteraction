import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter-parent',
  templateUrl: './voter-parent.component.html',
  styleUrls: ['./voter-parent.component.css']
})
export class VoterParentComponent implements OnInit {

  constructor() { }

  isVoted;

  ngOnInit() {
  }

  voteClick(value) {
    console.log(value);
    if (value) {
      this.isVoted = true;
    }
    else {
      this.isVoted = false;
    }
  }

}
