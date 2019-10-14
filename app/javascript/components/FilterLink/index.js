import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const FilterLink = ({ filter, children }) => (
  <Button
    fluid 
    as={NavLink}
    to={filter === 'all' ? '' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'lightgrey',
    }}
  >
    {children}
  </Button>
);

export default FilterLink;