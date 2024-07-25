// OrderController
package br.strategy.shopping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/cadastro")
public class CadastroController {

    private final UsuarioService usuarioService;

    @Autowired
    public CadastroController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/checkout")
    public ResponseEntity<CadastroResponse> checkout(@RequestBody Usuario usuario) {
        // Verifique se o email é único
        if (usuarioService.emailJaCadastrado(usuario.getEmail())) {
            return ResponseEntity.badRequest().body(new CadastroResponse("Email já cadastrado", -1));
        }

        // Salve o usuário no banco de dados
        Usuario novoUsuario = usuarioService.salvar(usuario);

        // Retorne uma resposta de sucesso com o ID do usuário recém-cadastrado
        CadastroResponse response = new CadastroResponse("Usuário cadastrado com sucesso", novoUsuario.getId());
        return ResponseEntity.ok(response);
    }
}

