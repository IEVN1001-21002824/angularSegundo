import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ejemplo1.component.html',
  styles: ``
})
export class Ejemplo1Component implements OnInit {
  formGroup!: FormGroup;
  constructor(private readonly fb: FormBuilder){}

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }
  initForm(): FormGroup{
    return this.fb.group({
      email:[''],
      password:['']
    })
  }
  onsubmit():void{
    console.log('Form->', this.formGroup.value);
  }

}
