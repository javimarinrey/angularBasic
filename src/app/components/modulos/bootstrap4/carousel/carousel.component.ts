import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  code: string = `
<ngb-carousel>
  <ng-template ngbSlide>
    <img src="https://lorempixel.com/900/500?r=1" alt="Random first slide">
    <div class="carousel-caption">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <img src="https://lorempixel.com/900/500?r=2" alt="Random second slide">
    <div class="carousel-caption">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <img src="https://lorempixel.com/900/500?r=3" alt="Random third slide">
    <div class="carousel-caption">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </div>
  </ng-template>
</ngb-carousel>  
  `;

  constructor() { }

  ngOnInit() {
  }

}
