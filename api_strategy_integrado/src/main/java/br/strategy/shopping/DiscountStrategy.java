package br.strategy.shopping;

//interface do Strategy
public interface DiscountStrategy {
    double applyDiscount(double totalAmount, int itemCount);
}
