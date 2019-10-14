import React from 'react';
import FilterLink from '../FilterLink';
import { Button } from 'semantic-ui-react';

const Footer = () => (
  <Button.Group color='teal' fluid widths={3}>
    Show:
    {' '}
    <FilterLink 
      filter='all'
    >
      All
    </FilterLink>
    {' '}
    <FilterLink 
      filter='active'
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink 
      filter='completed'
    >
      Completed
    </FilterLink>
  </Button.Group>
);

export default Footer;