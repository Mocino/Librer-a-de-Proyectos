import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BODY_PARTS, BodyPart } from '../../utils/body-parts';
import { PartesAfectadas } from '../../models/patient-Interfaz';

@Component({
  selector: 'app-body-selector',
  templateUrl: './body-selector.component.html',
  styleUrls: ['./body-selector.component.css']
})
export class BodySelectorComponent {
  @Output() partClicked: EventEmitter<PartesAfectadas[]> = new EventEmitter<PartesAfectadas[]>();
  @Input() selectedParts: Set<string> = new Set();

  hoveredPart: string | null = null;
  bodyPart: BodyPart = BODY_PARTS;

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

  onClick(part: PartesAfectadas[]) {
    this.partClicked.emit(part);
  }
}
