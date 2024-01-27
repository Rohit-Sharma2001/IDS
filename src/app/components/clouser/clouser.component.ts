import { Component, OnInit} from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-clouser',
  templateUrl: './clouser.component.html',
  styleUrls: ['./clouser.component.css']
})
export class ClouserComponent implements OnInit {
typed:any
ngOnInit(): void {
    this.main()
}
main(){
this.typed = new Typed('#element', {
    strings: ['Angular','React JS ','Node JS','MERN Stack ','MEAN Stack ','Python', 'Web Developer','JavaScript','HTML + CSS'],
    typeSpeed: 50,
    loop:true
});
}
}
