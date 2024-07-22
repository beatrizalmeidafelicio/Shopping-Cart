package br.strategy.shopping;

// Classe que representa a resposta de checkout
public class CheckoutResponse {

    // Atributos privados para armazenar os dados da resposta de checkout
    private double finalPrice;       // Armazena o preço final após o checkout
    private double discountApplied;  // Armazena o desconto aplicado durante o checkout

    // Método getter para obter o preço final
    public double getFinalPrice() {
        return finalPrice;
    }

    // Método setter para definir o preço final
    public void setFinalPrice(double finalPrice) {
        this.finalPrice = finalPrice;
    }

    // Método getter para obter o desconto aplicado
    public double getDiscountApplied() {
        return discountApplied;
    }

    // Método setter para definir o desconto aplicado
    public void setDiscountApplied(double discountApplied) {
        this.discountApplied = discountApplied;
    }
}
