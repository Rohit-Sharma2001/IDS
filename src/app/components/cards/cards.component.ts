import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

cardsGroup=[
  {
  imgUrl:"../assets/All_imgaes/cards img/notebook.png ",
  cardTitle:"Test Your Brain",
  cardText:"We have multiple assignmets waiting for you to test your coding skills, Enroll now and get your badge.",
  readMore:"Test Now"
},
{
  imgUrl:"../assets/All_imgaes/cards img/people.png ",
  cardTitle:"Training Mentor",
  cardText:"By being with a mentor, your skills become better and you become successful in the competition",

  readMore:"Read More"
},
{
  imgUrl:"../assets/All_imgaes/cards img/thinking icon.png  ",
  cardTitle:" Creative Thinking",
  cardText:"'Thinking Creatively' is a crucial skill that involves the ability to think outside the box and come up with unique, efficient solutions to coding problems.",
  readMore:"Read More"
}


]
btnText="View All Services"
}
