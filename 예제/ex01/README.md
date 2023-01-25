# 수동으로 React 연동하기

![화면 캡처 2023-01-25 144911](https://user-images.githubusercontent.com/114986610/214489999-91a49ef2-581f-4259-b1ba-afa013a793c7.png) \
1.**DOM Container (Root DOM Node)** 생성 -> 2.**리액트** 가져오기 -> 3.**리액트 컴포넌트** 가져오기
<br><br><br><br>


4.**MyButton.js 컴포넌트 생성** \
![화면 캡처 2023-01-25 144923](https://user-images.githubusercontent.com/114986610/214490037-9fc8211f-51b3-4693-8689-88bc511da637.png) \
5.**ReactDOM.render**를 이용해서 컴포넌트를 DOM Container에 렌더링하는 코드 작성 
```javascript
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
```
