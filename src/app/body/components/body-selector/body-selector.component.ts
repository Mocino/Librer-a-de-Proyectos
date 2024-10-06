import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body-selector',
  templateUrl: './body-selector.component.html',
  styleUrls: ['./body-selector.component.css']
})
export class BodySelectorComponent {
  @Output() partClicked: EventEmitter<string> = new EventEmitter<string>();
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

  // Este método se activa al hacer clic en una parte
  onClick(part: string) {
    this.partClicked.emit(part); // Emitir el nombre de la parte seleccionada
    console.log('your part: ', part)
  }
}
