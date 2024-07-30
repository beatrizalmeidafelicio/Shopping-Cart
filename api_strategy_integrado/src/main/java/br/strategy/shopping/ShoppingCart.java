package br.strategy.shopping;

import java.util.Arrays;
import java.util.List;

public class ShoppingCart {
    private DiscountStrategy discountStrategy;

    public void setDiscountStrategy(DiscountStrategy discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    public double calculateFinalPrice(double totalAmount, int itemCount) {
        if (discountStrategy != null) {
            return discountStrategy.applyDiscount(totalAmount, itemCount);
        }
        return totalAmount;
    }
}
