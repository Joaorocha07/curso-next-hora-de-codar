# Estrutura de Pastas

-> Para utilizar algo é fundamental conhecer como foi construido, e isso não é diferente em Next;

-> Com a criação do projeto, há também a criação de diversas pastas aqruivos e scripts;

-> Vamos conhecê-los!

## Componente de Layout

### Link do Vídeo
-> https://www.youtube.com/watch?v=lOJKBmAxeP8&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=8

-> Quando criamos site, alguns componentes sempre se repetem, em todas as páginas

-> Exemplo: Navbar, e footer;

-> Basicamente vamos criar os componentes e colocar na pasta components

-> E chamá-los nos arquivos _app.js

-> Vamos criar esta estrutura em Next!

### Link do Vídeo
-> https://www.youtube.com/watch?v=0pZgR4AL-rM&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=3

## Usando o Link do Next - Link do vídeo

->https://www.youtube.com/watch?v=blgNWZsQs60&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=6

## CSS e Next.js
-> Há duas formas simples de estilizar aplicações de Next.js

-> Estilos globais: podem ser adicionados no arquivos globals.css

-> CSS Modules: para componentes e página vamos utilizar o CSS Modules

-> Basta criar um arquivo .css com o nome do componente, emplo:
    Home.modules.css

-> lindo do vídeo: https://www.youtube.com/watch?v=4ecAh8wGsgI&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=9

## Meta dados do Next
-> Podemos inserir informações como title e outras meta tags a partir de um componente especial chamado Head;

-> Dentro dele passamos os parâmetro que queremos configurar para cada página 

-> Link do vídeo: https://www.youtube.com/watch?v=bOptkonwTbA&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=10

## Inserindo Assests
**->** Os asses em Next ficam sempre na **pasta public**

**->** Para linkar p src de uma imagem, por exemplo,m podemos partir do **caminho dela relativo a public**

**->** Uma convenção muito comum é colocar as imagens em uma **pasta chamada imagens** dentro de public

**->** As **backround images** funcionam da mesma maneira

**->** *Link do vídeo* (https://www.youtube.com/watch?v=S96tIHocp2E&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=11)

## Resgatando dados dinâmicos
**->** Para pegar dados dinâmicos vamos precisar da função **getStaticProps**

**->** **Utilizamos esta na própria página**, que possui dados a serem exibidos

**->** ela deve retornar um **objeto com os dados**

**->** Next vai renderizar isso antes do acesso do usuário, dando uma impressão de **carregamento instantâneo**

**->** O recurso é chamado de **Pre-rendering**

**->** *Link do vídeo* (https://www.youtube.com/watch?v=v8vJawWOYkM&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=12)

## Rotas dinâmicas

**->** Podemos criar **rotas dinâmicas**, ou seja que são gerados pelo próprio Next

**->** Para isso vamos criar um arquivo no padrão: [id].js

**->** Onde **id** seria o dado que é alterado em cada página

**->** Desta maneira temos páginas que são criadas automaticamente, melhor para quando **não temos controle de quantas precisaremos**

**->** *Link do vídeo* (https://www.youtube.com/watch?v=iWpLD2wTsZ4&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=13)

## Rotas dinâmicas com dados reais

**->** Para exibir nestas rotas vamos precisar utilizar o método **getStatisProps**

**->** E também o **getStaticPaths**, este vai fazer a criação das páginas dinâmicas em HTML

**->** Agora podemos acessar o objeto com os dados dentro do componente da página

**->** *Link do vídeo* (https://www.youtube.com/watch?v=Mzt_eg5IBiU&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=14)

## Página 404 customizada

**->** Para criar página **404 customizda** é simples

**->** Precisamos criar um arquivos **404.js** em pages

**->** E a partir desenvolvemos os **componentes e estilos**

**->** *Link do vídeo* (https://www.youtube.com/watch?v=rQSMtBXxdh4&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=15)

