import React from 'react';
import { Button } from 'react-materialize';

export default ({ handleChange, handleSubmit, name }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        placeholder="character name"
        onChange={handleChange}
        name='name'
      />
      <Button>Submit</Button>
    </form>
  )
}