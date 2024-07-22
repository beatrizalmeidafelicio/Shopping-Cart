/*package br.strategy.shopping;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DiscountController<DiscountResponse> {

    @PostMapping("/calculateDiscount")
    public ResponseEntity<DiscountResponse> calculateDiscount(@RequestBody DiscountRequest request) {
        // Implement your discount calculation logic here
        double discountAmount = calculateDiscount(request.getTotalAmount());

        DiscountResponse response = new DiscountResponse();
        response.setDiscountAmount(discountAmount);

        return ResponseEntity.ok(response);
    }

    private double calculateDiscount(double totalAmount) {
        if (totalAmount > 10000) {
            return totalAmount * 0.1;
        } else {
            return 0;
        }
    }
}*/
