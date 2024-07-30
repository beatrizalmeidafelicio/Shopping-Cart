package br.strategy.shopping;

/**
 * A classe ItemCountDiscountStrategy é uma estratégia de desconto que aplica um desconto de 20%
 * se o número de itens na compra for igual ou superior a 7.
 */
public class ItemCountDiscountStrategy implements DiscountStrategy {

    /**
     * Aplica um desconto de 20% se o número de itens na compra for igual ou superior a 7.
     * 
     * @param totalAmount O valor total da compra antes dos descontos
     * @param itemCount O número de itens na compra
     * @return O valor total após aplicar o desconto, se aplicável
     */
    @Override
    public double applyDiscount(double totalAmount, int itemCount) {
        // Verifica se o número de itens é igual ou superior a 7
        if (itemCount >= 7) {
            // Aplica um desconto de 20%
            return totalAmount * 0.80;
        }
        // Retorna o valor total sem desconto se a condição não for atendida
        return totalAmount;
    }
}
