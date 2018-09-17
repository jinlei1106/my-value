import React, { Component } from 'react';
import SummaryStore from '../stores/SummaryStore';


class Summary extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {count: SummaryStore.getSummary()};
    }

    componentDidMount() {
        SummaryStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        SummaryStore.removeChangeListener(this.onChange);
    }

    onChange() {
        const newCount = SummaryStore.getSummary();
        this.setState({count: newCount});
    }

    render() {
        return (
            <div>当前总数：{this.state.count} </div>
        );
    }
}

export default Summary;