package br.strategy.shopping;

// Classe que representa a requisição de checkout
public class CheckoutRequest {

    // Atributo privado para armazenar o totalAmount (total do valor a ser pago)
    private double totalAmount;

    // Método getter para obter o totalAmount
    public double getTotalAmount() {
        return totalAmount;
    }

    // Método setter para definir o totalAmount
    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }
}
