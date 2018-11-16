import React, { Component } from 'react';
import {connect} from "react-redux"
import{fetchData} from "../actions/todoAction"

class List extends Component {

    componentDidMount() {
        this.props.fetchData();

    }


    render() { 
        return ( 
        <div>
            <h1> To do list  </h1>
            {
                this.props.todo_list.map((todo, index) => 
                    <div key={index}>
                        {todo.description} <br/>
                        {JSON.stringify(todo.done)}
                    </div>)
            }
        </div>
         );
    }
}

const mapStateToProps = state => ({
    todo_list : state.todo.todo_list
})
 
// export default List;
export default connect(mapStateToProps, {fetchData})(List)