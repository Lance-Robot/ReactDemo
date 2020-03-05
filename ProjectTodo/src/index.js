import React from 'react';
import ReactDOM from 'react-dom';

//函数式组件，函数名要大写，jsx里插入js的代码需要加一层大括号，包括注释
const  App = (props) =>{
        return  (
            <div>
                <h1 title = {props.title}>Welcome React{props.title}</h1>
                <p>最好的React{props.title}</p>
            </div>
        )
};


ReactDOM.render(
    <App title = '1901'/>,
    document.querySelector('#root')
)