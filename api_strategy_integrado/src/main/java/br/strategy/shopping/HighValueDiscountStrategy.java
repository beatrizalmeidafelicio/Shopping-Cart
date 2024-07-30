package br.strategy.shopping;

/**
 * A classe HighValueDiscountStrategy é uma estratégia de desconto que aplica um desconto de 10%
 * para compras cujo valor total exceda 10.000.
 */
public class HighValueDiscountStrategy implements DiscountStrategy {

    /**
     * Aplica um desconto de 10% se o valor total da compra for superior a 10.000.
     * 
     * @param totalAmount O valor total da compra antes dos descontos
     * @param itemCount O número de itens na compra (não utilizado nesta estratégia)
     * @return O valor total após aplicar o desconto, se aplicável
     */
    @Override
    public double applyDiscount(double totalAmount, int itemCount) {
        // Verifica se o valor total excede 10.000
        if (totalAmount > 10000) {
            // Aplica um desconto de 10%
            return totalAmount * 0.90;
        }
        // Retorna o valor total sem desconto se a condição não for atendida
        return totalAmount;
    }
}
