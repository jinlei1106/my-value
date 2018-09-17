import React, { Component } from 'react';
import CounterStore from '../stores/CountStore';
import * as Actions from '../Actions';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickLess = this.onClickLess.bind(this);
        this.state = {count: CounterStore.getCounterValues()[props.caption]};
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount});
    }

    onClickAdd() {
        Actions.increment(this.props.caption);
    }

    onClickLess() {
        Actions.decrement(this.props.caption);
    }

    render() {
        return (
            <div>
                <div>当前次数：{this.state.count} </div>
                <div className={'button'} onClick={this.onClickAdd}>加</div>
                <div className={'button'} onClick={this.onClickLess}>减</div>
            </div>
        );
    }
}

export default Counter;