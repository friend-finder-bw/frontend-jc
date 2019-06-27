
import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name} * New Match * </h3>
      <strong>{props.age} {props.gender} </strong>
      <p>{props.city} {props.state} </p>
      <p>{props.hobby} is my favorite hobby! </p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  age: '',
  gender: '',
  city: '',
  state: '',
  hobby: ''
};

export default Smurf;