# Estrutura de Pastas

-> Para utilizar algo é fundamental conhecer como foi construido, e isso não é diferente em Next;

-> Com a criação do projeto, há também a criação de diversas pastas aqruivos e scripts;

-> Vamos conhecê-los!

## Componente de Layout

### Link do Vídeo
-> 

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

-> Link do vídeo: 

<div style="display: flex; justify-content: center;">
  <div style="text-align: center;">
  
    # Título Principal
    ## Subtítulo
    ### Subtítulo Menor
    
    **Texto em negrito**
    *Texto em itálico*
    
    - Item 1
    - Item 2
    - Item 3
    
    [Link do vídeo](https://www.youtube.com/watch?v=sePqgGCdJGM)
    
    ![Logo](https://exemplo.com/logo.png)
    
    ```
    function exemplo() {
        console.log("Isso é um exemplo de bloco de código");
    }
    ```
    
    `const variavel = "Exemplo de código inline";`
    
  </div>
</div>
