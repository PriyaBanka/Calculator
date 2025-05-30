import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // <-- import this
import { CalculatorService } from './services/calculator-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calculatorService = inject(CalculatorService);
  num1: number | null = null;
  num2: number | null = null;
  operation: string = 'add';
  result: number | null = null;
  errorMessage = '';

  calculate() {
    this.errorMessage = '';
    if (this.num1 === null || this.num2 === null) {
      this.errorMessage = 'Please enter both numbers.';
      this.result = null;
      return;
    }

    this.calculatorService.calculate(this.num1, this.num2, this.operation).subscribe({
      next: (res) => {
        this.result = res;
      },
      error: () => {
        this.errorMessage = 'Error in calculation (maybe division by zero).';
        this.result = null;
      },
    });
  }
}
