package br.strategy.shopping;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // Indica que esta é uma classe de configuração do Spring
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Configura as permissões de CORS
        registry.addMapping("/**") // Permite CORS para todos os endpoints
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Permite os métodos HTTP especificados
                .allowedHeaders("*") // Permite todos os cabeçalhos
                .exposedHeaders("Authorization", "Cache-Control", "Content-Type") // Exibe os cabeçalhos especificados na resposta
                .maxAge(3600) // Define o tempo de cache das permissões de CORS para 3600 segundos
                .allowedOrigins("*"); // Permite solicitações de qualquer origem
    }
}
