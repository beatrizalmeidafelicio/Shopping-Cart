package br.strategy.shopping;

import java.util.List;

/**
 * A classe DiscountManager é responsável por aplicar a melhor estratégia de desconto
 * entre várias estratégias disponíveis para um determinado valor total e número de itens.
 */
public class DiscountManager {
    private List<DiscountStrategy> discountStrategies; // Lista de estratégias de desconto

    public DiscountManager(List<DiscountStrategy> discountStrategies) {
        this.discountStrategies = discountStrategies;
    }

    public double applyBestDiscount(double totalAmount, int itemCount) {
        double bestDiscountedAmount = totalAmount; // Inicialmente, o melhor desconto é o valor total sem desconto

        // Itera sobre todas as estratégias de desconto disponíveis
        for (DiscountStrategy strategy : discountStrategies) {
            // Calcula o valor com desconto usando a estratégia atual
            double discountedAmount = strategy.applyDiscount(totalAmount, itemCount);
            // Atualiza o melhor desconto se o desconto atual for melhor
            if (discountedAmount < bestDiscountedAmount) {
                bestDiscountedAmount = discountedAmount;
            }
        }
        // Retorna o valor com o melhor desconto aplicado
        return bestDiscountedAmount;
    }
}
