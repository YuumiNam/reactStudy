import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다",
    },
    {   
        id: 2,
        message: "점심식사 시간입니다",
    },
    {   
        id: 3,
        message: "이제 곧 미팅이 시작됩니다",
    },
    {   
        id: 4,
        message: "저녁식사 시간입니다",
    },
];

var timer;

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
                // this.setState({
                //     notifications: [],
                // });
                clearInterval(timer);
            }
        }, 1000);
    }

    // React 18버전에서 index.js의 Strict Mode로 돌리면
    // Component를 unmount 시켰다가 다시 한번 remount시키게 됨
    // 때문에 componentDidMount() 함수가 두번 호출이 되고 화면에서는 한개씩이 아닌 두개씩이 출력이됨
    // 프로덕션 배포를 하게되면 Strict Mode는 무시되기때문에 정상작동하긴할거임
    // 해결법
    // 1. 아래와 같이 componentWillUnmount() 함수 구현
    // 2. index.js 파일의 React.StrictMode 부분을 삭제하고 실행
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }
    
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            key={notification.id } 
                            id={notification.id } 
                            message={notification.message } 
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;