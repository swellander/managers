import React from 'react';
import { Row, Input, Button } from 'react-materialize';

export default ({ bannermen, handleChange, handleSubmit, bannermanName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Input
          col={4}
          value={bannermanName}
          label="Bannerman"
          onChange={handleChange}
          name='bannermanName'
        />
        {/* <Input
          col={4}
          value={lordName}
          label="Lord Name"
          onChange={handleChange}
          name='lordName'
        /> */}
        <Input name="lordId" label='Lord' type='select' onChange={handleChange}>
          {bannermen.map(bannerman => (
            <option
              key={bannerman.id}
              value={bannerman.id}
            >
              {bannerman.name}
            </option>
          ))}
        </Input>
        <Button>Submit</Button>
      </Row>
    </form>
  )
}