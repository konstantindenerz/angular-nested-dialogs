import {Component} from '@angular/core';
import {AlertService} from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  showDialog = false;

  constructor(readonly alertService: AlertService) {
  }

  public showAlert() {
    this.alertService.show('foobar alert');
  }
}
