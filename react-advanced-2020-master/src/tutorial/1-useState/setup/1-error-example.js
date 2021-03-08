import React from 'react';

const ErrorExample = () => {
  
  const title = 'Default Title';
  const handlerClick = () => {
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
