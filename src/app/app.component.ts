import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-mask-test';
  sampleForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.sampleForm = this.fb.group({ date: ''});
  }
}
