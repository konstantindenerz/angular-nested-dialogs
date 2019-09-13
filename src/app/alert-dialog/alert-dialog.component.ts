import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.less'],
})
export class AlertDialogComponent implements OnInit, OnDestroy {
  @Input()
  nested: boolean;
  message?: any;
  @Output()
  public hide = new EventEmitter<void>();
  public timestamp = Date.now();
  constructor(readonly alertService: AlertService) {

  }

  ngOnInit() {
    this.alertService.register(this);
  }

  ngOnDestroy() {
    this.alertService.unregister(this);
  }

  show(message) {
    this.message = message;
  }
}
