import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvestment = '';
  enteredAnnualInvestment = '';
  enteredExpectedReturn = '';
  enteredDurationInYears = '';

  onSubmit(form: any) {
    if (
      this.enteredInitialInvestment <= '0' ||
      this.enteredAnnualInvestment <= '0' ||
      this.enteredExpectedReturn <= '0' ||
      this.enteredDurationInYears <= '0' ||
      this.enteredDurationInYears >= '150'
    ) {
      form.resetForm();
      Object.keys(form.controls).forEach((controlName) => {
        form.controls[controlName].markAsTouched();
      });
    } else if (form.valid) {
      this.investmentService.calculateInvestmentResults({
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
    this.investmentService.reset();
  }
}
