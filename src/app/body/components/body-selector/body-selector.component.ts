import { Component } from '@angular/core';

@Component({
  selector: 'app-body-selector',
  templateUrl: './body-selector.component.html',
  styleUrls: ['./body-selector.component.css']
})
export class BodySelectorComponent {
  hoveredPart: string | null = null;

  onMouseEnter(part: string) {
    this.hoveredPart = part;
  }

  onMouseLeave() {
    this.hoveredPart = null;
  }

  isPartHovered(part: string): boolean {
    return this.hoveredPart === part;
  }
}
