package br.strategy.shopping;

import java.util.List;

public class DiscountManager {
    private List<DiscountStrategy> discountStrategies;

    public DiscountManager(List<DiscountStrategy> discountStrategies) {
        this.discountStrategies = discountStrategies;
    }

    public double applyBestDiscount(double totalAmount, int itemCount) {
        double bestDiscountedAmount = totalAmount;
        for (DiscountStrategy strategy : discountStrategies) {
            double discountedAmount = strategy.applyDiscount(totalAmount, itemCount);
            if (discountedAmount < bestDiscountedAmount) {
                bestDiscountedAmount = discountedAmount;
            }
        }
        return bestDiscountedAmount;
    }
}
