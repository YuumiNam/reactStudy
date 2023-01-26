# Element란??
- React앱을 구성하는 가장 작은 블록들 <-> DOM element = DOM 하나하나를 의미함
- **React의 element들이 렌더링되어서 이후에 DOM element를 구성**
- **Virtual DOM에 있는 React Elements가 rendering을 거쳐서 Browser DOM의 DOM Elements가 되는것임**
- React의 element는 자바스크립트 객체형태로 존재함
- Component의 유형, 속성, 내부 모든자식의 정보를 포함하고있는 자바스크립트 객체
- "이 학습에서 표현될 element는 기본적으로 React의 element를 의미"

![화면 캡처 2023-01-26 131747](https://user-images.githubusercontent.com/114986610/214757623-0f8feb25-3a54-4c9f-879e-cbda539fb038.png)
<br>

# React elements의 형태
```javascript
// 단순 자바스크립트 객체로 나타낸 element
{
  type: 'button',
  props: {
    className: 'bg-green',
    children: {
      type: 'b',
      props: {
        children: 'Hello, element!'
      }
    }
  }
}

// 위 element가 실제로 렌더링 된다면 나타날 DOM element
<button class='bg-green'>
  <b>
    Hello, element!
  </b>
</button>

// 단순 자바스크립트 객체로 나타낸 element + type이 문자열이 아닌 객체인경우
{
  type: Button, // type이 문자열이 아닌 React Component가 들어가있음
  props: {
    color: 'green',
    children: 'Hello, element!'
  }
}

// 이처럼 React element는 자바스크립트 객체 형태로 존재함
// 그리고 이 객체를 만드는 역할 하는것이 createElement() 함수임
React.createElement(
  type,
  [props],
  [...children]
)
```
<br>


# 불변성
- 한번 생성된 React element는 변하지않는다
- 즉, element생성 후에는 attributes나 children을 바꿀 수 없다
- 화면에 변경된 element를 보여주려면 기존의 element를 변경하는 것이 아니다
- 새로운 element를 만들고 기존 element와 바꿔준다
<br>


# Elements 렌더링하기
```javascript
// Root DOM Node
// 이 태그 안에 React elements들이 렌더링 됨
<div id="root"></div>
```
![화면 캡처 2023-01-26 141211](https://user-images.githubusercontent.com/114986610/214763079-82a5c160-c156-4cbc-a722-1e0eba8be1d7.png)

```javascript
// 생성된 element를 root div에 렌더링하고있는 코드
// React element와 DOM element는 다른개념임을 이제는 잊지말자!
// React element는 Virtual DOM에 존재, DOM element는 실제 browser의 DOM에 존재
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
