import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Filter extends React.Component {
  render () {
    let path = window.location.pathname
    return (
      <div className="Filter">
        <Link to='/' style={{textDecoration: path === '/' ? 'underline' : 'none'}}>All</Link>
        <Link to='/active' style={{textDecoration: path === '/active' ? 'underline' : 'none'}}>Active</Link>
        <Link to='/completed' style={{textDecoration: path === '/completed' ? 'underline' : 'none'}}>Completed</Link>
      </div>
    )
  }
}

export default Filter
