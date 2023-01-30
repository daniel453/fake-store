import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.css']
})
export class ListErrorsComponent {
  @Input() errors:string[] = []
  @Output() onClose = new EventEmitter()

  onCloseClick() {
    this.onClose.emit()
  }
}
