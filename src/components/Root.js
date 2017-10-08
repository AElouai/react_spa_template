import React from 'react';
import {Navbar} from '../components';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
let isActive = false;
const clickHandler = el => console.log('---------------', el);

const Root = ({routes, paths}) => (
    <Router>
      <div>
          <Navbar paths={paths} clickHandler={clickHandler} />
          {routes.map(function (el,index) {return <Route exact path={el.path}  component={el.component} key={index}/>})}
      </div>
    </Router>
);

export default Root;
