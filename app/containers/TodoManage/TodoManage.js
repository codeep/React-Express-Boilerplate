import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as todoActions from '../../actions/todoActions';
import { TodoForm } from '../../components/TodoForm';

class TodoManage extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeDeadline = this.changeDeadline.bind(this);
    }

    componentDidMount() {
        const {match, actions} = this.props;
        const {id} = match.params;
        if (id) {
            actions.get_todo_by_id(id);
        } else {
            actions.clear_todo_data();
        }
    }

    changeName(event) {
        const { actions } = this.props;
        actions.change_todo_name(event.target.value);
    }

    changeDescription(event) {
        const { actions } = this.props;
        actions.change_todo_description(event.target.value);
    }

    changeDeadline(time) {
        const { actions } = this.props;
        actions.change_todo_deadline(time);
    }

    addTodo(event) {
        const {actions, history, todo} = this.props;
        const {name, description, deadline, id} = todo;

        event.preventDefault();
        todo.id
        ? actions.edit_todo(name, description, deadline, id)
        : actions.create_todo(name, description, deadline, id);
        history.push('/');
    }

    render() {
        const {todo} = this.props;

        return (
            <TodoForm
                todo={todo}
                onFormSubmit={this.addTodo}
                onNameChange={this.changeName}
                onDescriptionChange={this.changeDescription}
                onDeadlineChange={this.changeDeadline}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoManage));
