import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Root = ({routes, paths}) => (
    <Router>
      <div>
        <ul>
            {paths.map(function (el) { return <li><Link to={el} >{el}</Link></li> })}
        </ul>
          {routes.map(function (el) {return <Route exact path={el.path}  component={el.component}/>})}
      </div>
    </Router>
);

export default Root;
