package br.strategy.shopping;

public class NoDiscountStrategy implements DiscountStrategy {
    @Override
    public double applyDiscount(double totalAmount, int itemCount) {
        return totalAmount;
    }
}
