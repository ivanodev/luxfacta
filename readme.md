## Luxfacta Poll - aplicativo para votação

O Luxfacta Poll é uma aplicação desktop que acessa serviços restfull. Tanto o front-end quanto o back-end estão desenvolvidos em Java, sendo que no back-end utiliza-se dos frameworks Spring, Hibernate/JPA. 



## Banco de dados

O Banco de dados utilizado inicialmente é PostgreSQL, mas o sistema é facilmente adpatável para outros bancos relacionais. Para configuração do banco de dados é necessário acessar arquivo \luxfacta\api\src\main\resources\application.properties, do backend, e fazer a configuração necessário para o banco de dados que deseja utilizar.

A configuração de acesso para a api rest da aplicação, está fixa na camada client no arquivo \luxfacta\desktop\src\poll\com\luxfacta\desktop\service\API.java ( baseURL = new URL( "http://enqueteapi.luxfacta.com" );



##Estrutura de arquivos da aplicação

Luxfacta ---- api -- arquivos da camada servidor
         '
         '--- desktop -- arquivos da camada client