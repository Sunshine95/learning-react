import React from 'react';

const ErrorExample = () => {
  
  var title = 'Default Title';
  var handlerClick = () => {
    title = 'New Title';
    console.log(title);
  }
  
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={handlerClick} >
        Change Title!
      </button>
    </React.Fragment>
  )
};

export default ErrorExample;
