package br.strategy.shopping;

/**
 * A classe CadastroResponse representa a resposta de uma operação de cadastro.
 * Ela contém uma mensagem e um identificador de usuário.
 */
public class CadastroResponse {

    // Atributo que armazena a mensagem da resposta do cadastro
    private String mensagem;

    // Atributo que armazena o identificador do usuário cadastrado
    private int idUsuario;

    //Construtor
    public CadastroResponse(String mensagem, int idUsuario) {
        this.mensagem = mensagem;
        this.idUsuario = idUsuario;
    }

    public String getMensagem() {
        return mensagem;
    }

    public int getIdUsuario() {
        return idUsuario;
    }
}
