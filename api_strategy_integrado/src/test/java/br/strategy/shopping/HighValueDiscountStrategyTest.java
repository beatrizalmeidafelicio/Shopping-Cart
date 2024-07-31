package br.strategy.shopping;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class HighValueDiscountStrategyTest {

    @Test
    void testApplyDiscount() {
        DiscountStrategy strategy = new HighValueDiscountStrategy();
        double totalAmount = 12000;
        double expected = 12000 * 0.90; // 10% de desconto
        double result = strategy.applyDiscount(totalAmount, 5);
        assertEquals(expected, result, 0.001); // Verifica se o desconto foi aplicado corretamente
    }

    @Test
    void testNoDiscount() {
        DiscountStrategy strategy = new HighValueDiscountStrategy();
        double totalAmount = 8000;
        double expected = 8000; // Sem desconto
        double result = strategy.applyDiscount(totalAmount, 5);
        assertEquals(expected, result, 0.001); // Verifica se nenhum desconto foi aplicado
    }
}
