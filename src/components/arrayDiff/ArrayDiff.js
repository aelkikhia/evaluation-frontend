import React, {Component} from 'react';
import { connect } from 'react-redux';

import  ArrayDiffForm from './ArrayDiffForm'
import ArrayDiffList from "./ArrayDiffList";
import {fetchDiff} from "../../actions";



class ArrayDiff extends Component {

    onSubmit = formValues => {
        this.props.fetchDiff(formValues);
    };

    render() {
        return (
            <div>
                <h3>Calculate Array Differences</h3>
                <ArrayDiffForm onSubmit={this.onSubmit}/>
                <ArrayDiffList />
            </div>
        );
    }
}

export default connect(null, {fetchDiff})(ArrayDiff);