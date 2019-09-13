import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, OnInit, Optional, Output, SkipSelf} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  animations: [
    trigger('zoomInOut', [
      state('*', style({
        transform: 'scale(1)',
      })),
      state('void', style({
        transform: 'scale(0.2)',
      })),
      transition('* <=> void', [
        animate('.3s ease'),
      ]),
    ]),
    trigger('fadeInOut', [
      state('true', style({
        opacity: '1',
      })),
      state('false', style({
        opacity: '0',
      })),
      transition('true <=> false', [
        animate('.3s ease'),
      ]),
    ]),
  ],
})
export class DialogComponent implements OnInit {

  @Output()
  hide = new EventEmitter<void>();
  public nested: boolean;
  public showContent = false;

  constructor(@Optional() @SkipSelf() readonly parent: DialogComponent) {

  }

  ngOnInit() {
    this.nested = !!this.parent;
    this.showContent = !this.nested;
    console.log({showContent: this.showContent});
  }

  public animationDone(event: AnimationEvent) {
    console.log({ event });
    if (event.fromState === 'void') {
      this.showContent = true;
    } else {
      this.showContent = false;
    }
  }
}
