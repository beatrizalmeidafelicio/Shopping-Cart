package br.strategy.shopping;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class HighValueItemCountDiscountStrategyTest {

    @Test
    void testApplyDiscount() {
        DiscountStrategy strategy = new HighValueItemCountDiscountStrategy();
        double totalAmount = 16000;
        int itemCount = 10;
        double expected = 16000 * 0.70; // 30% de desconto
        double result = strategy.applyDiscount(totalAmount, itemCount);
        assertEquals(expected, result, 0.001); // Verifica se o desconto foi aplicado corretamente
    }

    @Test
    void testNoDiscount() {
        DiscountStrategy strategy = new HighValueItemCountDiscountStrategy();
        double totalAmount = 14000;
        int itemCount = 9;
        double expected = 14000; // Sem desconto
        double result = strategy.applyDiscount(totalAmount, itemCount);
        assertEquals(expected, result, 0.001); // Verifica se nenhum desconto foi aplicado
    }
}
