import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContentType } from 'src/app/models/content-type';
import { PublishDate } from 'src/app/models/publish-date';
import { VisitorType } from 'src/app/models/visitorType';
import { VisitorStateService } from 'src/app/services/visitor-state.service';
import { BirhdateValidator } from '../birhdate-validation';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css'],
})
export class VisitorFormComponent {
  newVisitor: VisitorType | undefined = undefined;

  public frm = this.formBuilder.group({
    name: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    content: ['', [Validators.required, Validators.minLength(50)]],
    birthdate: [
      '',
      [Validators.required, Validators.min(1900), BirhdateValidator()],
    ],
    publish: ['', Validators.required],
    contentType: ['', Validators.required],
    isOkay: [false],
  });
  constructor(
    private formBuilder: FormBuilder,
    public visitorService: VisitorStateService
  ) {}
  visible_error: boolean = false;
  visible_confirm: boolean = false;
  closeModal() {
    this.visible_error = false;
    this.visible_confirm = false;
  }

  save() {
    if (this.frm.invalid) {
      this.visible_error = true;
      return;
    }
    this.frm.controls['isOkay'].setValue(false);
    this.visible_confirm = true;
    this.newVisitor = this.frm.value as VisitorType;
    this.visitorService.add(this.newVisitor);
    this.visitorService.reset(this.frm);
  }
  publishDatelist: PublishDate[] = [
    { id: 1, text: '1 month' },
    { id: 2, text: '3 month' },
    { id: 3, text: '6 month' },
  ];
  contentTypeList: ContentType[] = [
    { id: 1, text: 'Criticism' },
    { id: 2, text: 'Suggestion' },
  ];

  isValid(controlSelector: string) {
    let control = this.frm.get(controlSelector)!;
    return control.valid && (control.dirty || control.touched);
  }
  isInvalid(controlSelector: string): boolean {
    let control = this.frm.get(controlSelector)!;
    if (!(control.invalid && (control.dirty || control.touched))) return false;
    if (control.errors?.['required']) return true;
    if (control.errors?.['minlength']) return true;
    if (control.errors?.['min']) return true;
    if (control.errors?.['pattern']) return true;
    if (control.errors?.['birthdateFormat']) return true;
    return false;
  }
  isInvalidControl(controlSelector: string, validationName: string) {
    let control = this.frm.get(controlSelector)!;
    return control.errors?.[validationName];
  }
}
