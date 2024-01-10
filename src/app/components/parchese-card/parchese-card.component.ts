import { Component } from '@angular/core';

@Component({
  selector: 'app-parchese-card',
  templateUrl: './parchese-card.component.html',
  styleUrls: ['./parchese-card.component.css']
})
export class ParcheseCardComponent {


  parchesCardData:any=[
    {
    PriceText:"Price",
    Price:"15000/-",
    months:"4 months",
    courseName:"MEAN Stack ",
    courseList:["Provide 100% Job Assistance","Provide Internship Letter","Provide Recording Videos","Work On Live Project","Also Available Demo Class","Gives Quetions on Prectice","Community support"],
    btnText:"Purchase now"
},
{
  PriceText:"Price",
  Price:"15000/-",
  months:"4 months",
  courseName:"MERN Stack ",
  courseList:["Provide 100% Job Assistance","Provide Internship Letter","Provide Recording Videos","Work On Live Project","Also Available Demo Class","Gives Quetions on Prectice","Community support"],
  btnText:"Purchase now"
},
{
  PriceText:"Price",
  Price:" 6500/-",
  months:"2 months",
  courseName:"JavaScript ",
  courseList:["Provide 100% Job Assistance","Provide Internship Letter","Provide Recording Videos","Work On Live Project","Also Available Demo Class","Gives Quetions on Prectice","Community support"],
  btnText:"Purchase now"
}
]
}
