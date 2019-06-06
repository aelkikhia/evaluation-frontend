import React, { Component} from 'react';
import  { connect } from "react-redux";

const header = ['Current', 'Target', 'Additions', 'Deletions'];

class ArrayDiffList extends Component {

    renderTable() {
        return (
            <table className="ui celled table">
                <thead><tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                <tbody>
                {
                    this.props.diffs.history.map((diff, index) => {
                        return (
                            <tr key={index}>
                                <td data-label="current">current: {formatList(diff.current)}</td>
                                <td data-label="target">target: {formatList(diff.target)}</td>
                                <td data-label="additions">additions: {formatList(diff.additions)}</td>
                                <td data-label="deletions">deletions: {formatList(diff.deletions)}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        )
    }

    render() {
        if (this.props.diffs.history.length === 0) {
            return <div> </div>;
        }
        if (!this.props.isSignedIn) {
            return <div>You must be signed in to view the results</div>
        }
        return (
            <div>
                <h2>Array Differences</h2>
                <div className="ui celled list">{this.renderTable()}</div>
            </div>
        );
    }
}


const formatList = (value) => {
    return `[${value.join(', ')}]`;
};


const mapStateToProps = state => {
    return {
        diffs: state.diffs,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps)(ArrayDiffList);