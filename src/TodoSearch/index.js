import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
//-----asi era antes cuando se usaban clases para crear componentes de React-----


//  class Componente extends React.Component{ 
//     constructor(){
//         this.state ={
//             patito: "juan"
//         };
//     }
//     render(){
//         return (
//             <div onClick={()=> this.setState ("Enrique")}>{this.state.patito}</div>
//         )
//     }
//  }
function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };


    return (
        <input
         className="TodoSearch"
         placeholder="Busque su tarea" 
         value={searchValue}
         onChange = {onSearchValueChange}
         />
    );
};

export{TodoSearch};