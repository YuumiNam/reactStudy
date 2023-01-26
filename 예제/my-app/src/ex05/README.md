# Component의 정의
- **React에서는 모든 페이지가 Component로 구성되어있음**
- 하나의 Component는 또 여러개의 Component의 조합으로 이루어질 수 있음
- 레고 블록 조립하듯 Component들을 모아서 개발

### 객체지향에서 나오는 class와 instance의 관계와 비슷
![화면 캡처 2023-01-26 135118](https://user-images.githubusercontent.com/114986610/214764988-647c2326-fcc4-4f32-bab1-4bf254962d5e.png)
<br><br>


# Props의 정의
- 입력과 출력, React에서는 입력에 props가 들어감
- Component가 붕어빵 틀이라면 Props는 실제 붕어빵에 들어가는 재료
- 즉, **컴포넌트에 전달할, 다양한 정보를 담고있는 자바스크립트 객체**
![화면 캡처 2023-01-26 143355](https://user-images.githubusercontent.com/114986610/214765351-2b4220ef-fd53-4a63-a447-f4e61aafcd30.png)

![화면 캡처 2023-01-26 143656](https://user-images.githubusercontent.com/114986610/214765680-728fda4d-aa85-4a82-9895-fdc17b433737.png)
<br><br>


# Props는 Read-Only
- **읽기전용, 즉 값을 변경 할 수 없다**
- 읽는 도중 값이 변경된다면 제대로된 element가 생성할 수 없음
- 붕어빵이 다 구워졌는데, 속재료를 바꿀 수는 없다
- 그렇다면, 다른 props의 값으로 element를 생성하려면 어떻게 해야하나
- 새로운 값을 component에 전달하여 새로운 element를 생성하고 이 과정에서 다시 렌더링되는것\
<br><br>


# Props는 pure한 함수와 같은 역할을 한다
**모든 리액트 컴포넌트는 props를 직접 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과(React element)를 보여줄것!! (중요)**
<br><br>


# Props의 사용법
```javascript
// App Component안에서 Profile Component를 사용하고 있음
// Profile Component 안에 name, introduction, viewCount 3가지 속성을 넣어줬음
function App(props) {
    return (
        <Profile 
            name="유미" 
            introduction="안녕하세요, 유미입니다" 
            viewCount={1500 } // 중괄호를 사용하면 무조건 자바스크립트 코드가 들어간다
        />
    );
}
```
<br><br>


# Component만들기 및 렌더링
- Component는 **Function Component**와 **Class Component**가 있음
- 하지만, Class Component는 여러가지 쓰기 불편한 요소가 많음
- 이 와중에 Function Component를 개선하는 과정에서 개발된 것이 이후에 배울 **Hook**이다
- React 개발에서는 거의 Hook을 사용한다

```javascript
// Function Component
function Welcome(props) {
    return <h1>안녕, {props.name }</h1>;
}


// Class Component
// React.Component를 상속받아야함
class Welcome extends React.Component {
    render() {
        return <h1>안녕, {props.name }</h1>;
    }
}
```
<br><br>


# Component 이름은 항상 대문자로 시작해야한다
```javascript
// HTML div태그로 인식
const element = <div />;


// Welcome이라는 리액트 Component로 인식
// 만약 <welcome /> 이렇게 쓴다면 DOM tag로 인식해버리기때문에 안됨!!
const element = <Welcome name="유미" />;
```
<br><br>


# Component 렌더링
- Component가 붕어빵 틀이라면 실제로 찍어낸 붕어빵은 Element
- 즉, Element를 렌더링 해주는 작업이 필요
```javascript
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
}

const element = <Welcome name="유미" />;

ReactDOM.render(
    element,
    document.getElmentById('root')
);
```
<br><br>


# Component 합성
```javascript
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
}

// App Component안에
// 3개의 Welcome Component가 포함되어있음
// 3개의 Welcome Component는 각각 다른 props를 갖고있음(name이 다름)
function App(props) {
    return(
        <Welcome name="Mike" />
        <Welcome name="Ami" />
        <Welcome name="Jane" />
    )
}

ReactDOM.render(
    <App />,
    document.getElmentById('root')
);
```
<br><br>


# Component 추출
```javascript
// Comment Component안에 수많은 div가 있음
// 이 중, avatar를 별도의 Component로 추출할것
// 그 다음, 상위 div인 user-info를 별도의 Component로 
function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <img className="avatar"
                    src={props.author.avatarUrl }
                    alt={props.author.name }
                />
                <div className="user-info-name">
                    {props.author.name }
                </div>
            </div>

            <div className="comment-text">
                {props.text }
            </div>

            <div className="comment-date">
                {formatDate(props.date) }
            </div>
        </div>
    );
}


// 위 Component의 props는 아래와 같은형태일것
props = {
    author: {
        name: "유미",
        avatarUrl: "https://....",
    },
    text: "댓글입니다",
    date: Date.now(),
}


// avatar를 별도의 Component로 추출하기
function Avatar(props) {
    return(
        <img className="avatar"
            src={props.user.avatarUrl } 
            alt={props.user.name }
        />
    )
}


// 추출한 avatar Component를 Comments Component에 반영
function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <Avatar user={props.author } /> // 여기를 바꿔줬음
                <div className="user-info-name">
                    {props.author.name }
                </div>
            </div>

            <div className="comment-text">
                {props.text }
            </div>

            <div className="comment-date">
                {formatDate(props.date) }
            </div>
        </div>
    );
}


// user-info를 별도의 Component로 추출하기
function UserInfo(props) {
    return(
        <div className="user-info">
            <Avatar user={props.user } />
            <div className="user-info-name">
                {props.user.name }
            </div>
        </div>
    )
}


// 추출한 UserInfo Component를 Comments Component에 반영
function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.author } /> // 여기를 바꿔줬음

            <div className="comment-text">
                {props.text }
            </div>

            <div className="comment-date">
                {formatDate(props.date) }
            </div>
        </div>
    );
}
```
