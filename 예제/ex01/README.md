# 수동으로 React 연동하기

![화면 캡처 2023-01-25 144911](https://user-images.githubusercontent.com/114986610/214489999-91a49ef2-581f-4259-b1ba-afa013a793c7.png) \
1.**DOM Container (Root DOM Node)** 생성 -> 2.**리액트** 가져오기 -> 3.**리액트 컴포넌트** 가져오기
<br><br><br><br>


4.**MyButton.js 컴포넌트 생성** \
![화면 캡처 2023-01-25 160331](https://user-images.githubusercontent.com/114986610/214500753-d3d0c20a-79e9-4c3b-b477-e0c879d48530.png) \
5.**ReactDOM.render**를 이용해서 컴포넌트를 DOM Container에 렌더링하는 코드 작성 
```javascript
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
```
