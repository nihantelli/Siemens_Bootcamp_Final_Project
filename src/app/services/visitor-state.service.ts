import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VisitorType } from '../models/visitorType';

@Injectable({
  providedIn: 'root',
})
export class VisitorStateService {
  public visitors: VisitorType[] = [];
  constructor() {}
  confirm: boolean = false;
  deleteVisitor(email: string) {
    this.visitors = this.visitors.filter((x) => x.email != email);
  }
  addVisitor(newVisitor: VisitorType) {
    this.visitors.push(newVisitor);
  }
  resetForm(frm: FormGroup) {
    frm.reset();
    frm.controls['publishdateExpire'].setValue('1 month');
  }
  confirmTrue(email: string) {
    this.visitors.forEach((x) => {
      if (x.email == email) {
        x.isOkay = true;
        this.confirm = true;
        return;
      }
    });
  }
}
