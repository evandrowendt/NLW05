import { useEffect } from "react"

/*export default function Home() {
    //método que pode ser usado em qualquer aplicação react, no estilo SPA
    useEffect(() => {
        fetch('http://localhost:3333/episodes')
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])
    return (
        <h1>index</h1>
    )
}*/

export default function Home(props) {
    return (
        <div>
            <h1>index</h1>
            <p>{JSON.stringify(props.episodes)}</p>
        </div>
    )
}

///SSR, esse método carrega antes de devolver uma resposta ao navegador
/*export async function getServerSideProps() {
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json();

    return{
        props: {
            episodes: data,
        }
    }
}*/

//SSG
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
