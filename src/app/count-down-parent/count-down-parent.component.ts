import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CountdownTimerComponent } from './../count-down-timer/count-down-timer.component';

@Component({
  selector: 'app-count-down-parent',
  templateUrl: './count-down-parent.component.html',
  styleUrls: ['./count-down-parent.component.css']
})
export class CountDownParentComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.timerComponent.seconds = 15;

  }

  start() {
    this.timerComponent.seconds = 15;
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

}
