import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message: "안녕하세요, 오늘 일정을 알려드립니다",
    },
    {
        message: "점심식사 시간입니다",
    },
    {
        message: "이제 곧 미팅이 시작됩니다",
    },
];

var  timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        // 생성자에 Notifivation이라는 빈 배열을 state에 넣어줬음
        this.state = {
          notifications: [],  
        };
    }

    // componentDidMount = Component가 생성되는 시점
    // setInterval() 함수를 사용하여 매 1초마다 정해진 작업을 수행함
    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                // state를 업데이트 하기 위하여
                // setState()함수를 사용했음
                // state는 직접변경은 절대 하면안되고 반드시 setState()를 통한 변경을 해줘야함
                this.setState({
                    notifications: notifications,
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message={notification.message }/>
                })}
            </div>
        );
    }
}

export default NotificationList;