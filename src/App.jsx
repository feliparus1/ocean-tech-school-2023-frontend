import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  // const item1 = {
  //   nome: 'Rick Sanchez',
  //   imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //   tags: ['Status: Vivo', 'Espécie: Humana']
  // };

  // const item2 = {
  //   nome: 'Morty Smith',
  //   imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //   tags: ['Tag 3']
  // };

  // const item3 = {
  //   nome: 'Summer Smith',
  //   imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  // };

  // const itens = [item1, item2, item3]

  // TODO: implementar lista de itens
 const [itens, setItens] = useState([])

 // useState do React traz duas coisas:
//  1 - O estado contendo o valor
//  2 - A função que atualiza o valor do estado
//  Quando executada, a função também renderiza o componente automaticamente

  async function carregamentoDadosApi() {
      //console.log("carregamentoDadosApi")
      const response = await fetch("https://rickandmortyapi.com/api/character")

      const json = await response.json()
      //console.log('json',json)

      const results = json.results
      //console.log(results)
      setItens(results)
  }

  // useEffect recebe duas informações:
  // 1 - Função contendo o efeito que será protegido pelo useEffect
  // 2 - Dependências que controlam a execução do useEffect. Array vazio para executar apenas 1 vez
  useEffect(function () {
    carregamentoDadosApi();
  }, []) 
  
  //console.log("Renderizando o componente")

  return (
    <>
      {itens.map(function (item, index) {
          return <Card item={item} key={`card_${index}`}/>
        })}
    </>
  )
}

export default App
