package br.strategy.shopping;

public class HighValueDiscountStrategy implements DiscountStrategy {
    @Override
    public double applyDiscount(double totalAmount) {
        if (totalAmount > 10000) {
            return totalAmount * 0.90;
        }
        return totalAmount;
    }
}
