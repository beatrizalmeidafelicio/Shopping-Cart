// OrderController
package br.strategy.shopping;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @PostMapping("/checkout")
    public ResponseEntity<CheckoutResponse> checkout(@RequestBody CheckoutRequest checkoutRequest) {
        System.out.println("Recebido valor total: " + checkoutRequest.getTotalAmount()); // teste

        ShoppingCart cart = new ShoppingCart();

        if (checkoutRequest.getTotalAmount() > 10000) {
            cart.setDiscountStrategy(new HighValueDiscountStrategy());
        } else {
            cart.setDiscountStrategy(new NoDiscountStrategy());
        }

        double finalPrice = cart.calculateFinalPrice(checkoutRequest.getTotalAmount());

        CheckoutResponse response = new CheckoutResponse();
        response.setFinalPrice(finalPrice);
        response.setDiscountApplied(checkoutRequest.getTotalAmount() - finalPrice);

        System.out.println("Preço final calculado: " + finalPrice); //teste
        System.out.println("Desconto aplicado: " + (checkoutRequest.getTotalAmount() - finalPrice)); // teste

        return ResponseEntity.ok(response);
    }
}
