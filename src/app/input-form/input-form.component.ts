import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CalculationService } from "../services/calculation.service";

@Component({
  selector: "app-input-form",
  templateUrl: "./input-form.component.html",
  styles: [],
})
export class InputFormComponent {
  @Output() calculate = new EventEmitter<any>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private calcService: CalculationService
  ) {
    this.form = this.fb.group({
      prixAchat: [null, Validators.required],
      loyerMensuel: [null, Validators.required],
      chargesAnnuelles: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const results = this.calcService.calculateRendement(this.form.value);
      this.calculate.emit(results);
    }
  }
}
