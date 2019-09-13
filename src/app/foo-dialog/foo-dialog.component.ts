import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-foo-dialog',
  templateUrl: './foo-dialog.component.html',
  styleUrls: ['./foo-dialog.component.less'],
})
export class FooDialogComponent implements OnInit {

  @Input()
  show: boolean;
  @Output()
  public hide = new EventEmitter<void>();

  constructor(readonly alertService: AlertService) {
  }

  ngOnInit() {
  }

  public showAlert() {
    this.alertService.show('foo dialog alert');
  }
}
