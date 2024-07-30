package br.strategy.shopping;

public class HighValueItemCountDiscountStrategy implements DiscountStrategy {
    @Override
    public double applyDiscount(double totalAmount, int itemCount) {
        if (totalAmount > 15000 && itemCount >= 10) {
            return totalAmount * 0.70;
        }
        return totalAmount;
    }
}
