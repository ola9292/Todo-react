
function TodoTemplate({item,removeTodo}){
    return(
        <div className="bg-gray-400 flex justify-between items-center px-4 my-2">
            <h3 className="px-4 py-2">{item} </h3>
            <span className="ml-12" onClick={()=>{removeTodo(item)}}>X</span> 
        </div>
    )
}

export default TodoTemplate