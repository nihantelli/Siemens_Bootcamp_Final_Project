import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VisitorType } from '../models/visitorType';

@Injectable({
  providedIn: 'root',
})
export class VisitorStateService {
  public visitors: VisitorType[] = [];
  constructor() {}

  deleteVisitor(email: string) {
    const index = this.visitors.findIndex((x) => x.email == email);
    this.visitors.splice(index, 1);
  }
  addVisitor(newVisitor: VisitorType) {
    this.visitors.push(newVisitor);
  }
  resetForm(form: FormGroup) {
    form.reset();
    form.controls['publishdateExpire'].setValue('1 month');
  }
}
