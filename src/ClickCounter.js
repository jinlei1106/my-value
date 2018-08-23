import React, { Component } from 'react';


class ClickCounter extends Component {
    render() {
        return (
            <div>
                你已经点了我 {this.props.count} 次了！
            </div>
        );
    }
}


class EmptyCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.EmptyButton = this.EmptyButton.bind(this);
        this.state = {count: 0};
    }

    onClickButton() {
        this.setState({count: this.state.count + 1});
    }

    EmptyButton() {
        this.setState({count: 0});
    }

    render() {
        return (
            <div>
                <ClickCounter count={this.state.count} />
                <div className={'button'} onClick={this.onClickButton}>点我</div>
                <div className={'button'} onClick={this.EmptyButton}>清空</div>
            </div>
        );
    }
}
export default EmptyCounter;
