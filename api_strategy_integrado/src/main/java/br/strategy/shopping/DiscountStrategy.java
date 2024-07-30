package br.strategy.shopping;

public interface DiscountStrategy {
    double applyDiscount(double totalAmount, int itemCount);
}
