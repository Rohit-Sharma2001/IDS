import { Component } from '@angular/core';
import { ApiCallingService } from 'src/app/Service/api-calling.service';

@Component({
  selector: 'app-qoutes-carousel',
  templateUrl: './qoutes-carousel.component.html',
  styleUrls: ['./qoutes-carousel.component.css']
})
export class QoutesCarouselComponent {

user:any={}
constructor(private apiService:ApiCallingService){}
saveQuery(){
  this.apiService.saveQuery(this.user).subscribe((data:any)=>{
    if(data.code){
      console.log(data.message)
    }
  })
}
}
