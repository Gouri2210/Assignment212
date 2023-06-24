import { Component } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-dr.list',
  templateUrl: './dr.list.component.html',
  styleUrls: ['./dr.list.component.css']
})
export class DrListComponent {

  public experience:any;
  public data:any;
  constructor(private ser : RegisterService)
  {
    this.ser.getData().subscribe((res:any)=> {console.log(res); this.data= res} )
  }

  ngOnInit()
  {
    this.experience = this.ser.exp;
  }

  
  
}
