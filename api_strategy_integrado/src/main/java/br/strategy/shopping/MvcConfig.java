package br.strategy.shopping;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * A classe MvcConfig é uma configuração do Spring MVC que define como os recursos estáticos devem ser manipulados.
 * 
 * Configura os manipuladores de recursos para servir arquivos estáticos da pasta /resources/ no caminho /resources/**.
 */
@Configuration // Indica que esta é uma classe de configuração do Spring
@EnableWebMvc // Habilita a configuração padrão do Spring MVC.
public class MvcConfig implements WebMvcConfigurer {

    /**
     * Configura os manipuladores de recursos para servir arquivos estáticos.
     * 
     * @param registry O registro onde os manipuladores de recursos são configurados
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Configura o manipulador para servir arquivos estáticos localizados na pasta /resources/
        registry
                .addResourceHandler("/resources/**") // Define o padrão de URL para acessar os recursos
                .addResourceLocations("/resources/"); // Define o local onde os arquivos estáticos estão armazenados
    }
}
