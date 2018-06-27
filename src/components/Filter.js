import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import setFilter from '../actions';

class Filter extends React.Component {
  render () {
    return (
      <div className="Filter">
        <Link to=' ' onClick={() => this.props.setFilter('SHOW_ALL')} style={{textDecoration: this.props.filter === 'SHOW_ALL' ? 'underline' : 'none'}}>All</Link>
        <Link to=' ' onClick={() => this.props.setFilter('ACTIVE')} style={{textDecoration: this.props.filter === 'ACTIVE' ? 'underline' : 'none'}}>Active</Link>
        <Link to=' ' onClick={() => this.props.setFilter('COMPLETED')} style={{textDecoration: this.props.filter === 'COMPLETED' ? 'underline' : 'none'}}>Completed</Link>
      </div>
    )
  }
}

export default connect((state) => ({filter: state.filter}), {setFilter})(Filter)
