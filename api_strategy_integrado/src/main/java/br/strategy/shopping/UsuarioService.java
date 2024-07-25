package br.strategy.shopping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    private final UsuarioRepository usuarioRepository; // Injete o repositório de usuários aqui

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public boolean emailJaCadastrado(String email) {
        // Verifique se o email já existe no banco de dados
        Usuario usuarioExistente = usuarioRepository.findByEmail(email);
        return usuarioExistente != null;
    }

    public Usuario salvar(Usuario usuario) {
        // Salve o usuário no banco de dados
        return usuarioRepository.save(usuario);
    }
}

