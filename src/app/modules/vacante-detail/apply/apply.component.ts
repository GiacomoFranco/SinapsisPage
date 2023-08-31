import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { requiredValidatorLogic } from '@app/shared/directives/required.directive';
import { Dragster } from '@matrx/dragster';
// import { requiredValidatorLogic } from '/shared/directives/required.directive.ts';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
})
export class ApplyComponent {
  @Output() toggleEmit = new EventEmitter<boolean>();

  draggingFile: boolean = false;
  dragster: any;
  possibleElement: any;
  @Input() set applyModalState(state: boolean) {
    this.possibleElement = document.querySelector('app-apply');
    if (state) {
      this.dragster = new Dragster(this.possibleElement);
    } else {
      this.dragster._destroy();
      this.resetForm();
    }
  }
  @HostListener('drop', ['$event']) drop(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.dragster.reset(this.possibleElement);
    this.toggleDropFile(event.type);
  }
  constructor() {
    document.addEventListener(
      'dragster-enter',
      (event) => {
        this.toggleDropFile(event.type);
      },
      false
    );

    document.addEventListener(
      'dragster-leave',
      (event) => {
        console.log(event);

        this.toggleDropFile(event.type);
        this.dragster.reset(this.possibleElement);
      },
      false
    );
  }

  public form: FormGroup = new FormGroup({
    fullName: new FormControl(null, Validators.required),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    ubication: new FormControl(null, Validators.required),
    files: new FormControl(null, Validators.required),
    telefono: new FormControl(null, [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    terms: new FormControl(null, Validators.required),
  });

  get Telefono(): FormControl {
    return this.form.get('telefono') as FormControl;
  }

  get Email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  ubications: any[] = ['Medellín', 'Montería', 'Bogatá', 'Cáli'];

  toggleModalState() {
    this.toggleEmit.emit(false);
  }

  toggleDropFile(eventListener: string): void {
    if (
      eventListener === 'dragover' ||
      eventListener === 'dragenter' ||
      eventListener === 'mouseenter' ||
      eventListener === 'dragster-enter'
    ) {
      this.draggingFile = true;
    } else {
      this.draggingFile = false;
    }
  }

  resetForm() {
    this.form.reset(); // Esto restablecerá los errores del FormGroup
  }

  test(el: any) {
    console.log(el);
  }
}
