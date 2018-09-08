import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changedDescription, search } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(event) {
    if (event.key === 'Enter') {
      event.shiftKey ? this.props.handleSarch() : this.props.handleAdd()
    } else if (event.key === 'Escape') {
      props.handleClear()
    }
  }

  render() {
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input
            id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            onChange={ this.props.changedDescription }
            onKeyUp={ this.keyHandler}
            value={ this.props.description } >
          </input>
        </Grid>
        
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus'
            onClick={ this.props.handleAdd } />
  
          <IconButton style='info' icon='search'
            onClick={ this.props.handleSarch } />
  
          <IconButton style='default' icon='close'
            onClick={ this.props.handleClear } />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => 
  ({ description: state.todo.description })

const mapDispatchToProps = dispatch => 
  bindActionCreators({ changedDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)