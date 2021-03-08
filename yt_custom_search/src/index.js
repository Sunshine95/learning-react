import React from 'react'
import ReactDom from 'react-dom'

 function Greeting() {
   return <h4>Ye main hoon, ye react hai;
     aur yahan pehla component ban gaya hai
   </h4>;
 }

 ReactDom.render(<Greeting/>, document.getElementById('root')
 );