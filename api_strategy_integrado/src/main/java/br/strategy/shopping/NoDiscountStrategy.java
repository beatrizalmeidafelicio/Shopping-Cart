package br.strategy.shopping;

//Classe que não aplica desconto.
public class NoDiscountStrategy implements DiscountStrategy {
    @Override
    public double applyDiscount(double totalAmount, int itemCount) {
        return totalAmount;
    }
}
