package br.strategy.shopping;

/**
 * A classe HighValueItemCountDiscountStrategy é uma estratégia de desconto que aplica um desconto de 30%
 * se o valor total da compra for superior a 15.000 e o número de itens for igual ou superior a 10.
 */
public class HighValueItemCountDiscountStrategy implements DiscountStrategy {

    /**
     * Aplica um desconto de 30% se o valor total da compra for superior a 15.000
     * e o número de itens for igual ou superior a 10.
     * 
     * @param totalAmount O valor total da compra antes dos descontos
     * @param itemCount O número de itens na compra
     * @return O valor total após aplicar o desconto, se aplicável
     */
    @Override
    public double applyDiscount(double totalAmount, int itemCount) {
        // Verifica se o valor total excede 15.000 e o número de itens é igual ou superior a 10
        if (totalAmount > 15000 && itemCount >= 10) {
            // Aplica um desconto de 30%
            return totalAmount * 0.70;
        }
        // Retorna o valor total sem desconto se as condições não forem atendidas
        return totalAmount;
    }
}
