import React,{useState, useContext, useEffect} from "react";
const Context = React.createContext()
function ContextProvider({children}){
    const [isOn, setIson] = useState(false)

    function toggleLight(){
        setIson((prevState)=>{
            return prevState = !prevState
        })
    }

    return(
        <Context.Provider value={{isOn, toggleLight}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}