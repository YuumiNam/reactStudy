# JSX란??
Javascript + XML/HTML
```javascript
// 자바스크립트 파일 안에 HTML 코드가 섞여있음
const element = <h1>Hello, World!!</h1>;
```
<br>


# JSX의 역할
내부적으로 XML/HTML 코드를 Javascript어로 변환 \
따라서, 우리가 JSX로 코드를 작성해도 최종적으로는 Javascript코드가 나오게 됨

**React의 createElement함수 - JSX코드를 Javascript코드로 변환하는 역할**
```javascript
React.createElement(
	type,
	[props],
	[...children]
)
```
<br>

# JSX코드 사용비교
## JSX를 사용한 코드
```javascript
class Hello extends React.Component {
	render() {
		return <div>Hello {this.props.toWhat}</div>;
	}
}

ReactDOM.render(
	<Hello toWhat="World" />,
	document.getElementById('root')
);
```
- Hello라는 React Component를 생성
- Component 내부에서 HTML과 Javascript가 결합된 JSX 사용중
- 이 Component를 ReactDOM의 render함수를 이용해서 실제 화면에 렌더링


## JSX를 사용하지 않은 순수 Javascript코드
```javascript
class Hello extends React.Component {
	render() {
		return React.createElement('div', null, 'Hello ${this.props.toWhat}');
	}
}

ReactDOM.render(
	React.createElement(Hello, {toWhat: 'World'}, null),
	document.getElementById('root')
);
```
- Hello Component 내부에서 JSX를 사용했던 부분이 React의 createElement함수로 대체되었음
- **JSX 문법을 사용하면 React에서는 내부적으로 createElement함수를 사용하도록 변환하게 되는것**
- 최종적으로는 createElement를 호출한 결과로 javascript 객체가 나오게 됨
<br>


## React.createElement()의 결과로 생성되는 객체
```javascript
// jSX 사용
const element = (
	<h1 className="greeting">Hello World!!</h1>
)
```
```javascript
// JSX 사용하지 않음
const element = React.createElement(
	'h1',
	{className:'greeting'},
	'Hello World!!'
)
```
```javascript
// JSX 사용하지 않았을 때
// React.createElement()의 결과로 생성되는 객체
const element = React.createElement(
	type: 'h1',
	props: {
	className: 'greeting',
	children: 'Hello World!!'
	}
)
```
- React는 이 객체들을 읽어서 DOM을 만들고 항상 최신상태로 유지함
- 이 객체를 Element라고 한다. 뒤에서 자세히 배울예정
<br>


# createElement()의 파라미터
```javascript
// 유형, 속성, 현재 Element가 포함하고 있는 자식 Element
React.createElement(
	type,
	[props],
	[...children]
)
```
<br>


# 리액트에서 JSX를 쓰는 것이 필수는 아님!
- 직접 모든 코드를 **createElement()함수**를 사용해서 개발도 가능
- 다만, **JSX를 사용했을때 코드가 간결해지기때문에 사용하는 것을 권장함**
