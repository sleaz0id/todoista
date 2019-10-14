import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
} from 'semantic-ui-react';

import SignInPage from '../SignInPage';
import TodosPage from '../TodosPage';

const App = ({ match }) => (
  <div>
    <Container text>
      <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
        <Header.Content>
          Todoista
        </Header.Content>
      </Header>
      <Divider hidden section />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={SignInPage} />
          <Route path="/:filter?" component={TodosPage} />
        </Switch>
      </BrowserRouter>
    </Container>
  </div>
);

export default App;