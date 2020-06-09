import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Post } from '@models';
import { AppState, updatePost } from '@state';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  @Input() public post: Post;
  @Output() public success: EventEmitter<void> = new EventEmitter();

  public form: FormGroup;
  public editing = false;
  public submitted = false;
  public editableFields: string[] = ['author', 'location'];

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.generateFields());
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      const payload = {
        id: this.post.id,
        author: '',
        location: '',
      };
      this.editableFields.forEach((field) => {
        payload[field] = this.form.get(field).value;
      });

      this.store.dispatch(updatePost(payload));
      this.success.emit();
      this.submitted = false;
    }
  }

  private generateFields() {
    return this.editableFields.reduce((result, current) => {
      result[current] = [this.post[current], Validators.required];
      return result;
    }, {});
  }
}
