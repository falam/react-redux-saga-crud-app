import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../actions/bookActions';
import BookForm from './BookForm';
//import {authorsFormattedForDropdown} from '../../selectors/selectors';
//import toastr from 'toastr';

export class ManageBookPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      saving: false
    };

    //this.updateCourseState = this.updateCourseState.bind(this);
    //this.saveCourse = this.saveCourse.bind(this);
  }

  render() {
    return (
      <BookForm />
    );
  }
}

export default ManageBookPage;
