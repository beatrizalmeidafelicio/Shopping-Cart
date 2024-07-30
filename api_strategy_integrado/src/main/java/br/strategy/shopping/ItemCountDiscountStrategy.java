package br.strategy.shopping;

public class ItemCountDiscountStrategy implements DiscountStrategy {
    @Override
    public double applyDiscount(double totalAmount, int itemCount) {
        if (itemCount >= 7) {
            return totalAmount * 0.80;
        }
        return totalAmount;
    }
}
