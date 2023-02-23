import React, {useState, useContext} from "react";
import { Context } from "./Context";
import TodoTemplate from "./TodoTemplate";

function Home(){
    const{isOn, toggleLight}=useContext(Context)
    
    const [formInput, setFormInput] = useState('')
    const[todoList, setTodoList]= useState([])


    function handleChange(e){
        setFormInput(e.target.value)
    }

    //add todo items
    function addTodo(e){
        e.preventDefault()
        if(formInput){
            setTodoList((prevState)=>{
                return[...prevState, formInput]
            })
        }
      
        clearInput()
    }

    //clear input
    function clearInput(){
        setFormInput('')
    }

    //remove item
    function removeTodo(todo){
      let newArr = []
      todoList.map((item)=>{
        if(todo != item){
            newArr.push(item)
        } 
      })
      setTodoList(newArr)
    }
    let todoArr= todoList.map((item, index)=>{
        return <TodoTemplate key={index} item={item} removeTodo={removeTodo}/>
    })
    return(

            <div className={isOn?'dark':'light'}>
            <div className="flex justify-between p-4">
            <h1>Todo List</h1>
            <button onClick={toggleLight}>{isOn ?<i className="fa-solid fa-toggle-on"></i>: <i className="fa-solid fa-toggle-off"></i>}</button>
            </div>
         
           <form action="" className="p-12">
            <input type="text" 
                    value={formInput}
                    onChange={handleChange}
                    className="border w-full"/>
            <button onClick={addTodo} className="border w-full bg-red-300">Add</button>
           </form>
           <div className="p-12">
           {todoArr}
           </div>
           
           

        </div>
       
        
    )
}

export default Home;