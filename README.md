# NLW05
Projeto desenvolvido durante a Next level week 05


## SSR e SSG
* React tem dificuldades com os motores de busca do google por exemplo, e também com SEO, pq como o browser faz requisições para o back end para ai então montar a interface, no momento inicial não existe nada na pagina, então ela é ignorada
* é ai que entram os tópicos abaixo

### SSR Server side rendenring
* browser acessa por exemplo a rota /cliente
* essa requisição cai em um servidor next.js
* servidor next.js busca os dados no back end que retorna o JSON
* servidor next.js gera a interface e retorna para o browser
* tem que buscar e montar toda a interface para cada acesso de usuário
* O método pode ser colocado na classe que se deseja que seja rodado antes de responder o navegador
* exemplo:
```
export async function getServerSideProps() {
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json();

    return{
        props: {
            episodes: data,
        }
    }
}
```

### SSG Static site generation
* A diferença é que o resultado retornado pelo servidor next.js para montar a interface é cacheada e pode ser acessadas por outros usuários por um período que pode ser pré determinado.
* O SSG só pode ser testado em produção, então é preciso gerar uma bild do projeto com ```yarn build```
* Para rodar em prod ```yarn start```
* Exemplo:
```
export async function getStaticProps() {
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json();

    return{
        props: {
            episodes: data,
        },
        revalidate: 60 * 60 * 8, //seg, min, horas; de quanto em quanto tempo vai ser consumido a API
    }
}
```

## Next.js
* Next é quase ele inteiro feito com react, e a maioria das funções expecificas são executadas automaticamente.
* Comando para criar uma aplicação next.js:
```create-next-app nomeDoProjeto```
* Comando para rodar o projeto: 
```yarn dev``` ou ```npm run dev```
* Ele não abre o navegador sozinho, tem que acessar a url, geralmente a localhost:3000


## TypeScript
* Typescript é uma linguagem de tipagem dinâmica, que auxilia muito no processo de desenvolvimento de uma aplicação;
* Abaixo um exemplo de como a tipagem auxilia no desenvolvimento:
- Vamos supor que o desenvolvedor precisa retornar no método o nome, cidade e estado do usuário, com a tipagem pré determinada,
sabemos quais são os dados minimos que o User deve possuir, e o que passar na chamada do método, a ferramentas como o VS code ajudam na identificação dos elementos 
que compoem o objeto atravéz da sintaxe . (ponto).
``` 
type User = {
    name: string;
    address: {
        city: string;
        state: string;
    }
}

function createWelcomeMessage(user: User) {
    return `Boas-vindas ${user.name}. Cidade: {user.address.city} - ${user.address.state}!`
}
```

* Para baixar o typescript e os types usar:
```yarn add typescript @types/react @types/node -D```Pode ser instalado como dependencia de desenvolvimento.

## React
* O arquivo _app.tsx está presente em todas as telas da aplicação, então componentes como o header, que devem ser apresentadas em todas as telas, podem ser adicionados direto no _app;

## Style
* Para a estilização será usado o SASS, que é um pré-processador css, ele permite otimizar a utilização do css,
podendo usar CSS encadeado, exemplo:
```
body {
    background: black;
    h1 {
        color: red;
    }
}
```
* Comando para instalar o SASS ```yarn add sass```


## Bibliotecas extras
* Biblioteca para trabalhar com datas ```yarn add date-fns```
* JSON server, pode ser usado na etapa de testes, é uma fake api para usar durante o desenvolvimento, ```yarn add json-server -D```
