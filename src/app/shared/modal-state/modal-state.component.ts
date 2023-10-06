import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-state',
  templateUrl: './modal-state.component.html',
  styleUrls: ['./modal-state.component.scss'],
})
export class ModalStateComponent {

  modalMessage: string | undefined;
  @Input() set updateModalMessage(message: string | undefined){
    this.modalMessage = message ?? undefined;
  }

  @Output() modalState = new EventEmitter();

  emitModalClose(){
    this.modalState.emit()
  };
}
