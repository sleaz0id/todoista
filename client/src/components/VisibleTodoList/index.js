import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Dimmer,
  Loader,
} from 'semantic-ui-react';

import * as actions from '../../actions';
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../../reducers';

import { TodoList } from '../TodoList';
import FetchError from '../FetchError';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter).then(() => console.log('done'));
  }

  render() {
    const { 
      toggleTodo,
      errorMessage,
      todos,
      isFetching
    } = this.props;

    if (isFetching && !todos.length) {
      return (
        <Container>
          <Dimmer active inverted>
            <Loader content='Loading' />
          </Dimmer>
        </Container>
      );
    }

    if (errorMessage && !todos.length) {
      return (
        <Container>
          <FetchError
            message={errorMessage}
            onRetry={() => this.fetchData()}
          />
        </Container>
      )
    }

    return (
      <Container>
        <TodoList 
          todos={todos}
          onTodoClick={toggleTodo}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state, { match: { params } }
) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    errorMessage: getErrorMessage(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  }
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;