import React from 'react';
import { connect } from 'react-redux';
import {
  Divider,
} from 'semantic-ui-react';
import AddTodo from '../../components/AddTodo/';
import VisibleTodoList from '../../components/VisibleTodoList/';
import Footer from '../../components/Footer/';

const TodosPage = ({ match }) => (
  <div>
    <Footer />
    <Divider section />
    <VisibleTodoList />
    <Divider section />
    <AddTodo />
  </div>
);

export default connect()(TodosPage);