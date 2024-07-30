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
        System.out.println("Recebido quantidade de itens: " + checkoutRequest.getItemCount()); // teste

        ShoppingCart cart = new ShoppingCart();

        // Exemplo de decisão de estratégia de desconto baseada no totalAmount e itemCount
        if (checkoutRequest.getTotalAmount() > 15000 && checkoutRequest.getItemCount() >= 10) {
            cart.setDiscountStrategy(new HighValueItemCountDiscountStrategy());
        } else if (checkoutRequest.getItemCount() >= 7) {
            cart.setDiscountStrategy(new ItemCountDiscountStrategy());
        } else if (checkoutRequest.getTotalAmount() > 10000) {
            cart.setDiscountStrategy(new HighValueDiscountStrategy());
        } else {
            cart.setDiscountStrategy(new NoDiscountStrategy());
        }

        double finalPrice = cart.calculateFinalPrice(checkoutRequest.getTotalAmount(), checkoutRequest.getItemCount());

        CheckoutResponse response = new CheckoutResponse();
        response.setFinalPrice(finalPrice);
        response.setDiscountApplied(checkoutRequest.getTotalAmount() - finalPrice);

        System.out.println("Preço final calculado: " + finalPrice); // teste
        System.out.println("Desconto aplicado: " + (checkoutRequest.getTotalAmount() - finalPrice)); // teste

        return ResponseEntity.ok(response);
    }
}
