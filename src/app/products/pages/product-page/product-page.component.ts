import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  private fb:FormBuilder = Inject(FormBuilder);
  public color:string= 'green';

  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(6),Validators.email]],
  });
}
