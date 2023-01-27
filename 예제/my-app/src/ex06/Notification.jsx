import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);

        // 생성자에 state에 아무런 데이터도 가지고 있지 않음
        this.state = {};
    }

    // 각각 Component가 Mount된 이후, Update된 이후, Unmount되기 전에
    // 로그를 남기도록 호출 될 것임
    componentDidMount() {
        console.log(`${this.props.id } componentDidMount() called`);
    }

    componentDidUpdate() {
        console.log(`${this.props.id } componentDidUpdate() called`);
    }

    componentWillUnmount() {
        console.log(`${this.props.id } componentWillUnmount() called`);
    }

    render() {
        return (
            <div style={styles.wrapper }>
                <span style={styles.messageText }>{this.props.message }</span>
            </div>
        );
    }
}

export default Notification;