import {Injectable} from '@angular/core';

export interface AlertDialog {
  show(message: string);
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  dialogs: AlertDialog[] = [];

  constructor() {
  }

  show(message) {
    const dialog = this.dialogs[this.dialogs.length - 1];
    dialog.show(message);
  }

  public register(dialog: AlertDialog) {
    this.dialogs.push(dialog);
  }

  public unregister(dialog: AlertDialog) {
    const index = this.dialogs.indexOf(dialog);
    if (index !== -1) {
      this.dialogs.splice(index, 1);
    }
  }
}
