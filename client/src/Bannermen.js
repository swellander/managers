import React from 'react';
import axios from 'axios';
import { Row } from 'react-materialize';
import Bannerman from './Bannerman';

export default ({ update, remove, bannermen }) => {

  const findLord = (_bannerman) => {
    const lord = bannermen.filter(bannerman => bannerman.id === _bannerman.lordId)[0];
    if (lord) return lord;
    else return { name: 'none but the Seven' }
  }

  return (
    <Row>
      {bannermen.map(bannerman => (
        <Bannerman
          lord={findLord(bannerman)}
          remove={remove}
          update={update}
          key={bannerman.id}
          bannerman={bannerman}
        />
      ))}
    </Row>
  )
}
