# 참고강의 : [인프런 - 소플의 처음만난 React 바로가기](https://www.inflearn.com/course/%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8)
<br><br>

**리액트(React)란??** \
**사용자 인터페이스를 만들기위한 자바스크립트 라이브러리** (A Javascript library for building user interfaces) \
라이브러리 - 자주 사용하는 기능들을 모아서 정리해놓은것 \
사용자 인터페이스(UI) - 사용자와 컴퓨터 간의 상호작용을 위해 입력과 출력을 제어해주는 것, 예를들어 화면에 나와있는 버튼

**프레임워크 vs 라이브러리** \
가장 큰 차이점은 **프로그램의 흐름에 대한 제어권한** \
프레임워크 - 제어권한을 개발자가 아닌 프레임워크가 갖고있음 \
라이브러리 - 개발자가 필요한 부분만 골라쓰는 느낌일뿐 라이브러리가 제어권한을 갖지는 않음
<br><br>

# React가 대세인 이유
![화면 캡처 2023-01-24 170328](https://user-images.githubusercontent.com/114986610/214280038-084dfa7f-93ec-44a1-9667-a809427b5dca.png)

왼쪽 - 기존의 웹사이트 \
오른쪽 - React를 이용한 **SPA(Single Page Application)** \
하나의 페이지만 존재하는 웹사이트, 하나의 페이지만으로 복잡한 웹페이지를 모두 표현 가능 \
이러한 SPA 구현을 도와주는 것이 React!!
<br><br><br><br>


# 리액트의 장점
## Virtual DOM
![화면 캡처 2023-01-25 102900](https://user-images.githubusercontent.com/114986610/214459884-502d4a82-db14-4221-bb51-292a79efe2fa.png)
DOM(Document Object Model)이란?? **웹페이지를 정의하는 하나의 객체**
- 일반적인 웹페이지는 화면이 업데이트 될때마다 DOM을 직접 수정해야함 -> 수정할 부분을 직접 찾아야하기때문에 매우 부담됨 \
- React는 DOM의 직접수정이 아닌, Virtual DOM을 통해서 수정해야 할 부분만을 빠르게 업데이트 해줌

## 재사용성 (Component-Based)
![화면 캡처 2023-01-25 111803](https://user-images.githubusercontent.com/114986610/214465834-40372fcc-723d-4b9b-84b9-35e4e52249e5.png)
- React는 모든 요소가 Component라는 하나의 개념으로 구성되어 있음
- 따라서, 의존성과 호환성 문제가 적으므로 Component단위로 재사용이 용이함

## 모바일 앱(App) 개발지식
- Javascript로 한번 코딩을 해서 Android와 IOS 앱을 만들 수 있음
<br><br><br>

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
<br><br>


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
