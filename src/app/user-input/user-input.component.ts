import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  @Output() reset = new EventEmitter<void>();

  enteredInitialInvestment = '';
  enteredAnnualInvestment = '';
  enteredExpectedReturn = '';
  enteredDurationInYears = '';

  onSubmit(form: any) {
    if (
      this.enteredInitialInvestment <= '0' ||
      this.enteredAnnualInvestment <= '0' ||
      this.enteredExpectedReturn <= '0' ||
      this.enteredDurationInYears <= '0'
    ) {
      form.resetForm();
      Object.keys(form.controls).forEach((controlName) => {
        form.controls[controlName].markAsTouched();
      });
    } else if (form.valid) {
      this.calculate.emit({
        initialInvestment: parseFloat(this.enteredInitialInvestment),
        duration: parseFloat(this.enteredDurationInYears),
        expectedReturn: parseFloat(this.enteredExpectedReturn),
        annualInvestment: parseFloat(this.enteredAnnualInvestment),
      });
    } else {
      Object.keys(form.controls).forEach((controlName) => {
        form.controls[controlName].markAsTouched();
      });
    }
  }
  onResetForm(form: any) {
    this.enteredInitialInvestment = '';
    this.enteredAnnualInvestment = '';
    this.enteredExpectedReturn = '';
    this.enteredDurationInYears = '';
    form.resetForm();
    this.reset.emit();
  }
}
