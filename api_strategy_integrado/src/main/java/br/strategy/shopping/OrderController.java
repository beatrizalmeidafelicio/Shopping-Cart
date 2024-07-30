package br.strategy.shopping;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * O controlador OrderController lida com requisições relacionadas ao processo de checkout de pedidos.
 * 
 * Exclui um endpoint para processar pedidos e aplicar estratégias de desconto com base em critérios definidos.
 */
@CrossOrigin // Permite solicitações CORS de qualquer origem
@RestController // Define esta classe como um controlador REST
@RequestMapping("/api/orders") // Mapeia todas as requisições para /api/orders
public class OrderController {

    /**
     * Processa uma requisição de checkout e aplica a melhor estratégia de desconto baseada no valor total
     * e na quantidade de itens fornecidos.
     * 
     * @param checkoutRequest O objeto contendo os detalhes da requisição de checkout
     * @return Uma resposta contendo o preço final e o valor do desconto aplicado
     */
    @PostMapping("/checkout") // Mapeia requisições POST para /api/orders/checkout
    public ResponseEntity<CheckoutResponse> checkout(@RequestBody CheckoutRequest checkoutRequest) {
        // Logs para depuração
        System.out.println("Recebido valor total: " + checkoutRequest.getTotalAmount());
        System.out.println("Recebido quantidade de itens: " + checkoutRequest.getItemCount());

        // Cria um novo carrinho de compras
        ShoppingCart cart = new ShoppingCart();

        // Decide qual estratégia de desconto aplicar com base no valor total e na quantidade de itens
        if (checkoutRequest.getTotalAmount() > 15000 && checkoutRequest.getItemCount() >= 10) {
            cart.setDiscountStrategy(new HighValueItemCountDiscountStrategy()); // Aplica desconto para alta quantidade e valor
        } else if (checkoutRequest.getItemCount() >= 7) {
            cart.setDiscountStrategy(new ItemCountDiscountStrategy()); // Aplica desconto baseado na quantidade de itens
        } else if (checkoutRequest.getTotalAmount() > 10000) {
            cart.setDiscountStrategy(new HighValueDiscountStrategy()); // Aplica desconto baseado no valor total
        } else {
            cart.setDiscountStrategy(new NoDiscountStrategy()); // Nenhum desconto aplicado
        }

        // Calcula o preço final após aplicar a estratégia de desconto
        double finalPrice = cart.calculateFinalPrice(checkoutRequest.getTotalAmount(), checkoutRequest.getItemCount());

        // Cria a resposta com o preço final e o valor do desconto aplicado
        CheckoutResponse response = new CheckoutResponse();
        response.setFinalPrice(finalPrice);
        response.setDiscountApplied(checkoutRequest.getTotalAmount() - finalPrice);

        // Logs para depuração
        System.out.println("Preço final calculado: " + finalPrice);
        System.out.println("Desconto aplicado: " + (checkoutRequest.getTotalAmount() - finalPrice));

        // Retorna a resposta com o preço final e o desconto aplicado
        return ResponseEntity.ok(response);
    }
}
