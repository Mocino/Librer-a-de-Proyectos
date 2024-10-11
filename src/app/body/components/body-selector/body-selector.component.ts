import { Component, Output, EventEmitter } from '@angular/core';
import { BODY_PARTS, BodyPart } from '../../utils/body-parts';

@Component({
  selector: 'app-body-selector',
  templateUrl: './body-selector.component.html',
  styleUrls: ['./body-selector.component.css']
})
export class BodySelectorComponent {
  @Output() partClicked: EventEmitter<string> = new EventEmitter<string>();
  hoveredPart: string | null = null;
  bodyPart: BodyPart = BODY_PARTS;
  selectedParts: Set<string> = new Set();

  onMouseEnter(part: string) {
    this.hoveredPart = part;
  }

  onMouseLeave() {
    this.hoveredPart = null;
  }

  isPartHovered(part: string): boolean {
    return this.hoveredPart === part;
  }

  isPartSelected(part: string): boolean {
    return this.selectedParts.has(part);
  }

  onClick(part: string) {
    if (this.selectedParts.has(part)) {
      this.selectedParts.delete(part);
    } else {
      this.selectedParts.add(part);
    }
    this.partClicked.emit(Array.from(this.selectedParts).join(', '));
  }
}
