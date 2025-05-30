import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/calc/calculate';

  calculate(num1: number, num2: number, operation: string): Observable<number> {
    return this.http.get<number>(this.apiUrl, {
      params: { num1: num1.toString(), num2: num2.toString(), operation },
    });
  }
}
