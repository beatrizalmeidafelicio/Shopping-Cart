package br.strategy.shopping;

public class CadastroResponse {
    private String mensagem;
    private int idUsuario;

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

