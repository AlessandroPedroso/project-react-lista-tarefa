import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';

import { Container, ToDoList, Input, Button,ListItem, Trash, Check,H3} from './styles.js'

function App() {
  //Código javaScript

  const [list, setList] = useState([])

  const [inputTask, setInputTask] = useState("")

  // const list = [
  //   {id: uuid(), task: "Levar o Nico para passear"},
  //   {id: uuid(), task:"Terminar as aulas de React"}
  // ]

  function inputMudou(event) {
    // console.log(event.target.value)
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    
    if(inputTask){

      setList([...list, { id: uuid(), task: inputTask, finished: false}])
    }

    // setList([{id:uuid(),task:task}])
    // console.log("cliquei no botao")
  }

  function finalizarTarefa(id){

    const newList = list.map(item =>(

      item.id === id ? {...item,finished: !item.finished} : item

    ))

    setList(newList)
  }

  function deletarTarefa(id){

    const newList = list.filter(item =>(
      item.id!==id
      
      ))

      setList(newList)

  }

  //Retorta HTML
  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id}>

                <Check onClick={()=> finalizarTarefa(item.id)}/>
                <li>{item.task}</li>
                <Trash onClick={()=> deletarTarefa(item.id)}/>

              </ListItem>
          ))):(
              <H3>Não há itens na lista</H3>
              
              )}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
