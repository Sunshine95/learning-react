import React from 'react'
import ReactDom from 'react-dom'

// stateless functional component
// always return JSX


function Items() {   
   return ( 
   <ul>
    <li><Item/></li>
    <li><Item/></li>
    <li><Item/></li>
    <li><Item/></li>
   </ul>
    )
};

function Item() {

  return (
    <section>
    <Title></Title>
    <Image></Image>
    <Snippet></Snippet>
    </section>
  )
}

function Title() {
  return (
    <h4>Selena Gomez</h4>
  )
}

function Image(params) {
  return (
    <img 
    src='https://1.bp.blogspot.com/-TxsMHjHgQsM/XMvpzRlT3GI/AAAAAAACmt0/I-32IrF9XsIs58fBGq70z7i7ap-0pIYsQCLcBGAs/s1600/Selena-Gomez-Sexy-in-Red-Bra-1.jpg'
    alt=''
    width='500'
    height=''
    ></img>
  )
}

function Snippet(params) {
  return (
    <p> This is Selena Gomez </p>
  )
}

 ReactDom.render(<Items/>, document.getElementById('root')
 );