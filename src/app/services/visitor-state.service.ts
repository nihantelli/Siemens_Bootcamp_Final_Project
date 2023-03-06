import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VisitorType } from '../models/visitorType';

@Injectable({
  providedIn: 'root',
})
export class VisitorStateService {
  public visitors: VisitorType[] = [];
  public confirmedVisitors: VisitorType[] = [];
  constructor() {}

  delete(email: string) {
    this.visitors = this.visitors.filter((x) => x.email != email);
    this.confirmedVisitors = this.confirmedVisitors.filter(
      (x) => x.email != email
    );
  }
  add(newVisitor: VisitorType) {
    this.visitors.push(newVisitor);
  }
  reset(frm: FormGroup) {
    frm.reset();
  }
  confirmTrue(email: string) {
    this.visitors.forEach((x) => {
      if (x.email == email) {
        x.isOkay = true;
        this.confirmedVisitors = this.visitors.filter((x) => x.isOkay == true);

        return;
      }
    });
  }
}
