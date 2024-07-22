package br.strategy.shopping;

public class ShoppingCart {
    private DiscountStrategy discountStrategy;

    public void setDiscountStrategy(DiscountStrategy discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    public double calculateFinalPrice(double totalAmount) {
        if (discountStrategy == null) {
            discountStrategy = new NoDiscountStrategy();
        }
        return discountStrategy.applyDiscount(totalAmount);
    }
}
