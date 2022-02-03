import React,{ useState } from "react";
import reactDom from "react-dom";

//Componente h4
const Statistic=(props)=>{

    const {text,valor}=props;
    
    return (
        <div>
            <tr>
                <td>{text}</td>
                <td>{valor}</td>
            </tr>
            
        </div>
    );

};
const Statistics=(props)=>{
    const{good,neutral,bad}=props;
    const all =good+neutral+bad;
    let promedio=0;
    let porsiento=0;

    if(all !== 0){
        promedio =(good - bad)/all;
        porsiento =(good/all)*100;
    }
    if(all === 0){
        return (<div>No feedback given</div>)

    }else{
        return(
        <div>
           <table>
               <tbody>
               <Statistic text="Good: " valor={good}/>
               <Statistic text="Neutral: " valor={neutral}/>
               <Statistic text= "Bad: " valor={bad}/>
               <Statistic text="Total de resena: " valor={all}/>
               <Statistic text="Promedio: " valor={promedio}/>
               <Statistic text="Porsentaje: " valor={porsiento}/> 
               </tbody>
           </table>
        
        </div> )
            
        

    }
}
//Componente boton
const Boton=(props)=>{
    const{funcion,text}=props;

    return(
        <button onClick={funcion}>{text}</button>
    )

}
//Componente principal
const App=()=>{
    const [good,setGood]=useState(0)
    const [neutral,setNeutral]=useState(0)
    const [bad,setBad]=useState(0)
    
    const addGoodValue = (value) => {
        setGood(value);
      };
    
      const addNeutralValue = (value) => {
        setNeutral(value);
      };
    
      const addBadValue = (value) => {
        setBad(value);
      };
    
    return (
        
        <div>
            
            <h1>Give feedback</h1>
            <Boton funcion={()=>addGoodValue(good+1)} text="good"/>
            <Boton funcion={()=>addNeutralValue(neutral+1)} text="Neutral"/>
            <Boton funcion={()=>addBadValue(bad+1)} text="Bad"/>
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}


reactDom.render(<App/>,document.getElementById("root"));