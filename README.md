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

### SSG Static site generation
* A diferença é que o resultado retornado pelo servidor next.js para montar a interface é cacheada e pode ser acessadas por outros usuários por um período que pode ser pré determinado.