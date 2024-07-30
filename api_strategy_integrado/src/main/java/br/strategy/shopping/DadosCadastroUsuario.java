package br.strategy.shopping;

/**
 * A classe DadosCadastroUsuario é uma record que representa os dados necessários para o cadastro de um usuário.
 * 
 * Utiliza uma record para garantir que a instância da classe seja imutável e para fornecer uma implementação automática
 * dos métodos equals(), hashCode() e toString(), bem como um construtor e getters.
 */

public record DadosCadastroUsuario(String nome, String email, String senha, int telefone) {



}
