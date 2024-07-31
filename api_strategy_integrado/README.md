## Sistema de compras usando o padrão de projeto Strategy

O padrão de projeto Strategy é utilizado para encapsular diferentes algoritmos de desconto e permitir a seleção dinâmica da estratégia de desconto mais apropriada com base nas condições da compra. O padrão foi desenvolvido da seguinte forma: criou-se a interface DiscountStrategy para criar um contrato para diferentes estratégias, usou-se a classe DiscountManager para decidir o melhor desconto a ser aplicado em tempo de execução, com isso, foi definido os tipos de descontos aplicados: para compras com o valor maior de R$ 10.000,00 ganha-se 10% de desconto, caso a compra seja maior que R$ 15.000,00 e a quantidade de itens for maior que 10, ganha-se 30% de desconto, se comprar mais de 7 itens ganha-se 20%.


## Cadastro de Usuário

As classes que manipulam o cadastro colaboram para permitir a criação, armazenamento e recuperação de informações de usuários de forma estruturada e eficiente, apoiando funcionalidades como registro e autenticação de usuários. Elas fazem isso ao: capturar os dados pela classe (DadosCadastroUsuario), persistir dados pela classe (Usuário), e acessar os dados pela (UsuarioRepository), assim fornece métodos para interagir com o banco de dados.

## Como Programação Orientada a Objetos foi utilizada

- Encapsulamento: foi utilizado na classe Usuário ao colocar privado os campos 'nome', 'email', 'telefone' e 'senha', a fim de proteger o estado interno de um objeto.
- Herança: A interface UsuarioRepository estende JpaRepository, herdando métodos para operações de CRUD e outras funcionalidades.
- Polimorfismo: DiscountStrategy: As classes HighValueDiscountStrategy, HighValueItemCountDiscountStrategy, e ItemCountDiscountStrategy implementam a interface DiscountStrategy. O método applyDiscount pode ser chamado de maneira polimórfica em uma instância de DiscountStrategy, permitindo que diferentes estratégias de desconto sejam aplicadas de acordo com o tipo de desconto desejado.
- Composição: DiscountManager: Possui uma lista de objetos DiscountStrategy e usa essa lista para aplicar a melhor estratégia de desconto. Isso demonstra composição ao utilizar diferentes estratégias de desconto em uma única classe.
- Objetos: criados nas classes Usuario, DadosCadastroUsuário, HighValueDiscountStrategy, ItemCountDiscountStrategy, OrderController, ShoppingCart e DiscountManager.

## Dependências utilizadas

- spring-boot-starter-data-jpa: Facilitar a implementação de repositórios JPA e a integração com bancos de dados.
- spring-boot-starter-web:  inclui dependências para desenvolver aplicações web.
- com.h2database:h2: Prover um banco de dados em memória para desenvolvimento e testes rápidos, sem a necessidade de instalar um banco de dados externo.
- spring-boot-starter-test: Facilitar a escrita e execução de testes unitários.
- org.projectlombok:lombok: Simplificar e reduzir a quantidade de código repetitivo, como getters, setters, construtores, e métodos.



