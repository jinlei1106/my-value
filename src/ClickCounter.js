import React, { Component } from 'react';


class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickLess = this.onClickLess.bind(this);
        this.state = {count: props.count};
    }

    onClickAdd() {
        this.setState({count: this.state.count + 1});
    }

    onClickLess() {
        this.setState({count: this.state.count - 1});
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


class EmptyCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count1: 0, count2: 1, count3: 2};
    }

    onClickButton() {
        this.setState({count1: 0, count2: 1, count3: 2});
    }

    render() {
        return (
            <div>
                <ClickCounter count={this.state.count1} />
                <ClickCounter count={this.state.count2} />
                <ClickCounter count={this.state.count3} />
                <div className={'button button-ex'} onClick={this.onClickButton}>重置</div>
            </div>
        );
    }
}
export default EmptyCounter;
