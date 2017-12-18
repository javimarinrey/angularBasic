import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import {
  bounceIn, bounceInDown, bounceInLeft, bounceOut, bounceOutRight, bounceOutUp, fadeIn, fadeInDown, fadeInLeft, fadeOut,
  fadeOutRight,
  fadeOutUp,
  flash, flip, flipInX, flipInY, flipOutX, flipOutY, hinge, jackInTheBox,
  jello, lightSpeedIn, lightSpeedOut, pulse, rollIn, rollOut, rotateIn, rotateInDownLeft, rotateInUpRight, rotateOut,
  rotateOutDownRight,
  rotateOutUpLeft,
  rubberBand,
  shake, slideInDown, slideInLeft, slideOutRight, slideOutUp,
  swing, tada,
  wobble, zoomIn, zoomInDown, zoomInLeft, zoomOut,
  zoomOutRight, zoomOutUp
} from 'ng-animate/lib';

@Component({
  selector: 'app-ng2animate',
  templateUrl: './ng2animate.component.html',
  styleUrls: ['./ng2animate.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('flash', [transition('* => *', useAnimation(flash))]),
    trigger('pulse', [transition('* => *', useAnimation(pulse))]),
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand))]),
    trigger('shake', [transition('* => *', useAnimation(shake))]),
    trigger('swing', [transition('* => *', useAnimation(swing))]),
    trigger('tada', [transition('* => *', useAnimation(tada))]),
    trigger('wobble', [transition('* => *', useAnimation(wobble))]),
    trigger('jello', [transition('* => *', useAnimation(jello))]),

    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('bounceOut', [transition('* => *', useAnimation(bounceOut))]),
    trigger('bounceOutRight', [
      transition('* => *', useAnimation(bounceOutRight)),
    ]),
    trigger('bounceOutUp', [transition('* => *', useAnimation(bounceOutUp))]),

    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))]),
    trigger('fadeOut', [transition('* => *', useAnimation(fadeOut))]),
    trigger('fadeOutUp', [transition('* => *', useAnimation(fadeOutUp))]),
    trigger('fadeOutRight', [transition('* => *', useAnimation(fadeOutRight))]),

    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))]),
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))]),
    trigger('slideOutUp', [transition('* => *', useAnimation(slideOutUp))]),
    trigger('slideOutRight', [
      transition('* => *', useAnimation(slideOutRight)),
    ]),

    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('flipInX', [transition('* => *', useAnimation(flipInX))]),
    trigger('flipInY', [transition('* => *', useAnimation(flipInY))]),
    trigger('flipOutX', [transition('* => *', useAnimation(flipOutX))]),
    trigger('flipOutY', [transition('* => *', useAnimation(flipOutY))]),

    trigger('lightSpeedIn', [transition('* => *', useAnimation(lightSpeedIn))]),
    trigger('lightSpeedOut', [
      transition('* => *', useAnimation(lightSpeedOut)),
    ]),

    trigger('rotateIn', [transition('* => *', useAnimation(rotateIn))]),
    trigger('rotateInDownLeft', [
      transition('* => *', useAnimation(rotateInDownLeft)),
    ]),
    trigger('rotateInUpRight', [
      transition('* => *', useAnimation(rotateInUpRight)),
    ]),
    trigger('rotateOut', [transition('* => *', useAnimation(rotateOut))]),
    trigger('rotateOutUpLeft', [
      transition('* => *', useAnimation(rotateOutUpLeft)),
    ]),
    trigger('rotateOutDownRight', [
      transition('* => *', useAnimation(rotateOutDownRight)),
    ]),

    trigger('hinge', [transition('* => *', useAnimation(hinge))]),
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox))]),
    trigger('rollIn', [transition('* => *', useAnimation(rollIn))]),
    trigger('rollOut', [transition('* => *', useAnimation(rollOut))]),

    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]),
    trigger('zoomInLeft', [transition('* => *', useAnimation(zoomInLeft))]),
    trigger('zoomInDown', [transition('* => *', useAnimation(zoomInDown))]),
    trigger('zoomOut', [transition('* => *', useAnimation(zoomOut))]),
    trigger('zoomOutUp', [transition('* => *', useAnimation(zoomOutUp))]),
    trigger('zoomOutRight', [transition('* => *', useAnimation(zoomOutRight))]),
  ]
})
export class Ng2animateComponent {

  attentionSeekers = [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
    'swing',
    'tada',
    'wobble',
    'jello',
  ];

  bouncing = [
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceOut',
    'bounceOutUp',
    'bounceOutRight',
  ];

  fading = [
    'fadeIn',
    'fadeInDown',
    'fadeInLeft',
    'fadeOut',
    'fadeOutUp',
    'fadeOutRight',
  ];

  sliding = ['slideInDown', 'slideInLeft', 'slideOutUp', 'slideOutRight'];

  flippers = ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'];

  lightSpeed = ['lightSpeedIn', 'lightSpeedOut'];

  rotate = [
    'rotateIn',
    'rotateInDownLeft',
    'rotateInUpRight',
    'rotateOut',
    'rotateOutUpLeft',
    'rotateOutDownRight',
  ];

  specials = ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'];

  zooming = [
    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomOut',
    'zoomOutUp',
    'zoomOutRight',
  ];

  animate(name: 'string') {
    this[name] = !this[name];
  }

}
