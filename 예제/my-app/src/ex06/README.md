# State란??
- 리액트 Component의 변경가능한 데이터를 의미
- state는 개발자가 직접 정의함
- 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 함!
- state는 Javascript 객체임

```javascript
// Class Component의 경우 state를 생성자에서 정의함
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    
    // 현재 state를 정의하는 부분
    this.state = { 
      liked: false
    };
  }
  
  ...
}

// Function Component의 경우 state의 정의는
// useState() 라는 Hook을 사용해서 정의
// 다음 챕터에서 다룰예정
```
<br>


# state는 직접 수정하면 안된다
### state는 Component의 렌더링과 관련이있기 때문에 마음대로 수정하게 되면 큰 오류를 불러올 수 있음

```javascript
// state를 직접 수정 (잘못된 사용법)
this.state = {
  name: '유미'
};


// setState() 함수를 통한 수정 (정상적인 사용법)
this.setState({
  name: '유미'
});
```
<br>


# Component의 Lifecycle
- Component는 계속 존재하는 것이 아니라
- 시간의 흐름에 따라 생성되고 업데이트되다가 사라진다

![화면 캡처 2023-01-26 174003](https://user-images.githubusercontent.com/114986610/214792043-0f944023-0865-476b-a235-f92dcb41ea32.png)
