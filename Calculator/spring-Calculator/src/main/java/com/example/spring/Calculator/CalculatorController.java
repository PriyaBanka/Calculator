package com.example.spring.Calculator;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calc")
@CrossOrigin(origins = "http://localhost:4200") 
public class CalculatorController {

    @GetMapping("/calculate")
    public ResponseEntity<Double> calculate(
        @RequestParam double num1,
        @RequestParam double num2,
        @RequestParam String operation) {
        
        double result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 == 0) return ResponseEntity.badRequest().build();
                result = num1 / num2;
                break;
            default:
                return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(result);
    }
}
