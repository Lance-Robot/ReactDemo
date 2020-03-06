import React from 'react';
import { render} from 'react-dom';
import './index.css'
import classNames  from 'classnames';
import styled from 'styled-components';

// //函数式组件，函数名要大写，jsx里插入js的代码需要加一层大括号，包括注释
// const  App = (props) =>{
//         return  (
//             <div>
//                 <h1 title = {props.title}>Welcome React{props.title}</h1>
//                 <p>最好的React{props.title}</p>
//             </div>
//         )
// };


// ReactDOM.render(
//     <App title = '1901'/>,
//     document.querySelector('#root')
// )
const Title =styled.h1`
    color : #F00
`
//类组件 jsx原理  React.createElement(type,[props],[...children])
class App extends React.Component{
    
    render(){

        const  style = {color :'#F00'};

        return(
            <div>
                <Title  >元素中的样式</Title>
                <ol>
                    <li style = {style}>使用内联创建</li>
                    <li  className = {classNames('a',{'b':true,'c':false})}>使用class方式，但是在react里class要写成className</li>
                </ol>
            </div>
           

        )
        
         
    }
}


render(
     <App desc = "1901"/>,
    document.querySelector("#root")
);
