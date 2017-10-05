import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  onClick(element: HTMLElement) {
    this.renderer.setStyle(element, 'display', 'block');
 }

}
