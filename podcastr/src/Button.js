import { useState } from 'react';

export default function Button(props) {
    const [counter, setCounter] = useState(1);
    //no react para alterar os elementos é preciso alterar o estado(valor) das variaveis usando o useState
    //useState retorna o valor atual da variavel e o valor a setar

    function increment() {
        setCounter(counter + 1)
    }

    //props.children é uma propriedade nativa do react, é usada para passar conteudo dentro da tag criada, exemplo <Button>Conteúdo filho</Button>
    return(
        <>
            <span>{counter}</span>
            <button onClick={increment}>{props.children}</button><br></br> 
        </>
    )
}