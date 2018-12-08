import React from 'react';
import App from '#/components/pages/app';
import { connect } from 'react-redux';
import { getFirstname } from '#/reducers/user';

const AppContainer = ({ firstname }) => <App firstname={firstname} />;

const mapStateToProps = state => ({ firstname: getFirstname(state) });

export default connect(
  mapStateToProps,
  null,
)(AppContainer);
