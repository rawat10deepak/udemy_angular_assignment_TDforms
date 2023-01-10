import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('myForm') subsForm: NgForm;

  subsList = ['Basic', 'Advance', 'Pro'];
  defaultSubs = 'Advance';

  onSubmit() {
    console.log(this.subsForm.value);
  }
}
