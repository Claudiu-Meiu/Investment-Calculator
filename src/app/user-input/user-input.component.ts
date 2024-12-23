import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = '';
  enteredAnnualInvestment = '';
  enteredExpectedReturn = '';
  enteredDurationInYears = '';

  onSubmit(form: any) {
    if (form.valid) {
      this.calculate.emit({
        initialInvestment: parseFloat(this.enteredInitialInvestment),
        duration: parseFloat(this.enteredDurationInYears),
        expectedReturn: parseFloat(this.enteredExpectedReturn),
        annualInvestment: parseFloat(this.enteredAnnualInvestment),
      });
      form.resetForm();
    }
  }
}
