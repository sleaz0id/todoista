import React from 'react';
import {
  Container,
  Divider,
  Header,
  Icon,
} from 'semantic-ui-react';
import AddTodo from '../../components/AddTodo/';
import VisibleTodoList from '../../components/VisibleTodoList/';
import Footer from '../../components/Footer/';

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
        <Footer />
        <Divider section />
        <VisibleTodoList />
        <Divider section />
        <AddTodo />
      </Container>
  </div>
);

export default App;