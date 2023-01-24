# React 입문했습니다!!
참고1 : [인프런 - 소플의 처음만난 React 바로가기](https://www.inflearn.com/course/%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8) \
참고2 : [유튜브 - 코딩앙마 React.js강좌 바로가기](https://www.youtube.com/playlist?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-)
<br><br><br><br>


# React가 대세인 이유
![화면 캡처 2023-01-24 170328](https://user-images.githubusercontent.com/114986610/214280038-084dfa7f-93ec-44a1-9667-a809427b5dca.png)

왼쪽 - 기존의 웹사이트 \
오른쪽 - React를 이용한 **SPA(Single Page Application)** \
하나의 페이지만 존재하는 웹사이트, 하나의 페이지만으로 복잡한 웹페이지를 모두 표현 가능
<br><br><br><br>


# 개발환경 설정하기
[Node.js 설치 바로가기](https://nodejs.org/ko/download/) (JavaScript runtime) \
자바스크립트로 **네트워크 어플리케이션을 개발할 수 있도록 도와주는 환경**

[VS Code 설치 바로가기](https://code.visualstudio.com/) (Integrated Development Environment) \
마이크로소프트에서 제공하는 통합 개발환경 툴
<br><br><br>


# 기본적인 JavaScript 문법!!
## 변수선언 방식
**1. var - 중복 선언 가능, 재할당 가능**
```javascript
let title = 'book';
console.log(title); // book

let title = 'movie';
console.log(title); 
//Uncaught SyntaxError: Identifier 'title' has already been declared

title = 'music';
console.log(title);//music
```
- var 는 원조 변수선언방식으로, 위 코드와 같이 선언한 변수가 동일한 이름으로 중복 선언이 가능하다. \
**즉, 마지막에 할당된 값이 최종 변수에 저장된다.**
- 변수를 유연하게 사용할 수 있지만, 기존에 선언해둔 변수의 존재를 잊고 재선언 하는 경우 문제가 발생할 수 있다.
- 이를 보완하기 위해 ES6 부터 추가된 변수선언 방식이 **let** 과 **const** 이다.

**2. let - 중복선언 불가, 재할당 가능**
```javascript
let title = 'book';
console.log(title); // book

let title = 'movie';
console.log(title); 
//Uncaught SyntaxError: Identifier 'title' has already been declared

title = 'music';
console.log(title);//music
```
var와 달리 중복선언 시, \
해당 변수는 이미 선언되었다는 에러 메시지를 뱉는다. \
즉, **중복선언이 불가능**하다. \
하지만 **변수에 값을 재할당하는 것은 가능**하다.

**3. const - 중복선언 불가, 재할당 불가**
```javascript
const title = 'book';
console.log(title); // book

const title = 'movie';
console.log(title); 
//Uncaught SyntaxError: Identifier 'title' has already been declared

title = 'music';
console.log(title);
//Uncaught TypeError: Assignment to constant variable
```
let와 const의 차이는 **immutable(재할당)가능여부**이다. \
재할당은 가능한 let과 달리 const는 재할당 또한 불가하다.
<br><br><br><br>


## 동등연산자와 일치연산자
```javascript
let a = 1;
let b = '1';

// 동등연산자, 값만 비교
console.log(a == b); // 출력결과: true
console.log(a != b); // 출력결과: false

// 일치연산자, 값과 자료형까지 비교
console.log(a === b); // 출력결과: false
console.log(a !== b); // 출력결과: true
```
<br>


## 삼항연산자
**조건식 ? true일경우 : false일경우**
```javascript
let a = true;
let b = false;

console.log(a ? 1 : 2); // 출력결과: 1

console.log(b ? 1 : 2); // 출력결과: 2
```
<br>


## JavaScript의 함수
```javascript
// function statement를 사용
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20)); // 출력결과: 30


// arrow function expresstion을 사용
const multiply = (a, b) => {
  return a * b;
}
console.log(multiply(10. 20)); // 출력결과: 200
```
