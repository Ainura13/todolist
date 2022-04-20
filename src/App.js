import './App.css';
import React, { useState } from 'react';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';
import EditModal from './components/EditModal/EditModal';


  const App = () => {

    const [todos, setTodos] = useState([])
    // console.log(todos)
    let [modal, setModal] = useState(false);
    let [editTodo, setEditTodo] = useState({})

    function handleTask(newObj){
      let newTodos = [...todos];
      newTodos.push(newObj);
      setTodos(newTodos);
    }

    //to make line through
    function changeStatus (id){
      const newTodos = todos.map(item => {
        if(item.id === id){
          item.status = !item.status;
        }
        return item
      });
      setTodos(newTodos)
    }

    //delete
    function handleDelete(id){
      let newTodos = todos.filter(item => {
        return item.id !== id
      })
      setTodos(newTodos)
    }

    //Edit

    function handleEdit(index){
      setModal(true)
      setEditTodo(todos[index])

    }

   

    function handleSaveTask(newTask){
      const newTodos = todos.map(item => {
        if(item.id === newTask.id){
          return newTask
        }
        return item
      });
      setTodos(newTodos)
      handleCloseModal()
    }

    function handleCloseModal(){
      setModal(false)
    }

  return (
    <div>
      <AddToDo handleTask={handleTask}/>
      <ToDoList 
      todos={todos} 
      changeStatus={changeStatus}
      handleDelete={handleDelete}
      handleEdit = {handleEdit}/>
      {modal ? 
      <EditModal
      editTodo = {editTodo}
      handleSaveTask = {handleSaveTask}
      handleCloseModal = {handleCloseModal}
      /> 
      : null}
      
    </div>
  );
};

export default App;
