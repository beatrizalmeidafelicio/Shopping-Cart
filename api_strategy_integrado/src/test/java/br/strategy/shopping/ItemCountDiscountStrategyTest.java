package br.strategy.shopping;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class ItemCountDiscountStrategyTest {

    @Test
    void testApplyDiscount() {
        DiscountStrategy strategy = new ItemCountDiscountStrategy();
        double totalAmount = 10000;
        int itemCount = 8;
        double expected = 10000 * 0.80; // 20% de desconto
        double result = strategy.applyDiscount(totalAmount, itemCount);
        assertEquals(expected, result, 0.001); // Verifica se o desconto foi aplicado corretamente
    }

    @Test
    void testNoDiscount() {
        DiscountStrategy strategy = new ItemCountDiscountStrategy();
        double totalAmount = 10000;
        int itemCount = 6;
        double expected = 10000; // Sem desconto
        double result = strategy.applyDiscount(totalAmount, itemCount);
        assertEquals(expected, result, 0.001); // Verifica se nenhum desconto foi aplicado
    }
}
