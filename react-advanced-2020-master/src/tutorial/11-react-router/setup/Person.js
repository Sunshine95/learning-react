import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {

  const [name, setName] = useState('default');
  const {id} = useParams();

  useEffect(() => {
    
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson &&newPerson.name);

  }, [id])

  return (
    <div>
      <h2>{name}</h2>
      <div className="container">
        
          <Link to="/people" className='btn'>
            <h3>Back to People</h3>
          </Link>
        
      </div>
    </div>
  );
};

export default Person;
