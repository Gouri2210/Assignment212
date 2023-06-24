import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  rupeesAmount: any;
  public myForm: any;
  show: boolean = false;
  public isSubmitted:boolean= false;
  public allData:any;

  public  experienceForm: any;
  public totalYears: any;
  public totalMonths: any;  

  timeForm: any;

  startDate: any;
  endDate: any;
  experienceYears: any;
  

  constructor(private fb: FormBuilder, private ser : RegisterService) {
    this.myForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone :['',[Validators.required, Validators.pattern(/^\d{10}$/)]],
      pass: ['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      d1 :['',[Validators.required]],
      d2 :['',[Validators.required]],
      d3 :[''],
      onlineFee:[''],
      personFee:[''],
      
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      experience:[this.experienceYears],

  
      items: this.fb.array([this.createItem()]),
      
    })
    
  }
 
  
 

  showbutton() {
    this.show = true;
    (this.myForm.controls['items'] as FormArray).push(this.createItem())
  }
  createItem() {
    return this.fb.group({
      dt: ['',[Validators.required]],
    });
  }
  
  
  onSubmitData() {
     this.calculateExperience();
      this.isSubmitted = true;
   this.ser.postData(this.myForm.value).subscribe((res:any)=>{console.log(res);
  alert("Data added successfully");})
   

  
  }

  get f(){
    // console.log(this.myForm.controls);
    console.log(this.myForm.controls['email']);
    return this.myForm.controls;
  }

  // *******************************************

  ngOnInit() {
    this.timeForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  calculateExperience(): void {
    if (this.timeForm.valid) {
      const startDate = new Date(this.timeForm.value.startDate);
      const endDate = new Date(this.timeForm.value.endDate);

      if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime()) && startDate <= endDate) {
        const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
        const startMonth = startDate.getMonth();
        const endMonth = endDate.getMonth();

        if (endMonth < startMonth || (endMonth === startMonth && endDate.getDate() < startDate.getDate())) {
          this.experienceYears = yearsDiff - 1;
        } else {
          this.experienceYears = yearsDiff;
        }
      } 
      else 
      {
        this.experienceYears = null;
      }
      
     
}


  }
}
