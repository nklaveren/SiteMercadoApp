import { AfterViewInit, ElementRef, ViewChildren } from "@angular/core";
import { FormBuilder, FormControlName, FormGroup } from "@angular/forms";
import { Observable, fromEvent, merge } from "rxjs";
import { displayMessage, GenericValidator, ValidationMessages } from "../utils/generic-form-validation";

export abstract class BaseFormComponent implements AfterViewInit {
  errors: any[] = [];
  messages: any[] = [];
  isLoading = false
  displayMessage: displayMessage = {}
  unsavedChanges = false;
  protected genericValidator: GenericValidator


  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  constructor(
    protected fb: FormBuilder,
    public validationMessages: ValidationMessages
  ) {
    this.genericValidator = new GenericValidator(this.validationMessages)
  }
  ngAfterViewInit(): void {
    this.registerOnBlur(this.currentForm());
  }

  registerOnBlur(form: FormGroup) {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(form);
      this.unsavedChanges = true;
    })
  }

  protected isFormValid() {
    return this.currentForm().dirty && this.currentForm().valid
  }

  clearMessages() {
    this.errors = []
    this.messages = []
  }

  protected abstract currentForm(): FormGroup;
}
