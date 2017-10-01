import React from 'react';
import { connect } from 'react-redux';

import {Root} from '../components';
import {AboutContainer , HomeContainer} from '../containers';

import {
    SLACH,
    INDEX_PATH,
    ABOUT_PATH,
    HOME_PATH,
} from '../constants/Router.constants';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = () => {
  return {
    paths: [ABOUT_PATH, HOME_PATH],
    routes: [
        { path: SLACH+INDEX_PATH, component: HomeContainer},
        { path: SLACH+HOME_PATH, component: HomeContainer},
        { path: SLACH+ABOUT_PATH, component: AboutContainer},
    ]
  };
};


export default connect(mapStateToProps, {})(RootContainer);


/*const RootContainer = props => <Router>
                                    <div>
                                        <ul>
                                            <li><Link to="/home">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                        </ul>

                                        <hr/>

                                        <Route exact path="/" component={HomeContainer}/>
                                        <Route path="/about" component={AboutContainer}/>
                                        <Route path="/home" component={HomeContainer}/>
                                    </div>
                                </Router>;
export default RootContainer;*/