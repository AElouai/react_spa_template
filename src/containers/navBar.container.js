import React from 'react';
import { connect } from 'react-redux';

import {Navbar} from '../components';

const NavBarContainer = props => <Navbar {...props} />;

const mapStateToProps = (state) => state;


export default connect(mapStateToProps, {})(NavBarContainer);