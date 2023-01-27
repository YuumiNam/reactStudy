# Hook의 개념
- 앞서 봤듯이 Component에는 **Class Component**와 **Function Component**가 있음
- Class Component에서는 생성자에서 state를 정의하고 setState()함수를 통해 업데이트하고 Lifecycle methods를 제공함
- 하지만 Function Component에서는 state를 사용하지못하고 Lifecycle에 따른 기능구현도 못함 (대신 코드는 간결해짐)
- Function Component에 이러한 기능을 지원하기 위해 나온것이 바로 **Hook**이다
- Hook의 명칭은 모두 "use~"로 시작한다

![화면 캡처 2023-01-27 104738](https://user-images.githubusercontent.com/114986610/214992451-38829387-9b99-45dc-89ce-9744be18c6ad.png)
<br><br>


# useState()
- state를 사용하기 위한 Hook

```javascript
// useState() 사용법
const [변수명, set함수명] = useState(초기값);
```
<br>

- 아래와 같이, count를 함수의 변수로 사용하게 되면 버튼 클릭시 count 값을 증가시킬수는 있겠지만
- 재 렌더링이 일어나지 않아 새로운 count값이 화면에 표시되지는 않음
- 따라서, 이러한 경우에는 재 렌더링이 되도록 state를 사용해야 하는데
- Function Component에는 state기능이 없기 때문에 **useState()** 함수를 사용하여 state를 선언하고 업데이트해야함
```javascript
// 클릭할때마다 count를 증가시켜주는 Counter Component
import React from "react";

function Counter(props) {
    var count = 0;

    return (
        <div>
            <p>총 {count }번 클릭했습니다</p>
            <button onClick={() => count++ }>클릭</button>
        </div>
    );
}
```
<br>

- 클릭할때마다 화면이 재 렌더링 되면서 바뀐 count가 화면에 반영됨
- 이 과정은 ex06의 Class Component에서 썼던 setState()함수를 호출해서 업데이트 되고 재 렌더링되는 과정과 동일함
- 다만, **Class Component에서는 setState()함수 하나로 모든 state값을 업데이트 할 수 있었지만**
- **Function Component의 useState()를 사용하는 경우 변수 각각에 대해 set함수가 따로 존재!!**
```javascript
// useState()를 사용해서 고친 Counter Component
import React, {userState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count }번 클릭했습니다</p>
            <button onClick={() => setCount(count + 1) }>클릭</button>
        </div>
    );
}
```
<br><br>


# useEffect()
- side effect를 수행하기 위한 Hook
- side effect란 다른 Component에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없는 것들
- 예를 들어, 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업
- useEffect()함수는 이러한 side effect를 실행할 수 있게 해주는 Hook이다
- Class Component에서 제공하는 LifeCycle함수인 ComponentDidMount(), ComponentDidUpdate(), ComponentWillUnmount()와 동일한 기능을 하나로 통합함

```javascript
// useEffect() 사용법
// Effect function의 기본적인 모양 
// Component가 렌더링 된 이후와 업데이트로 인한 재 렌더링 이후에 실행됨
useEffect(이펙트 함수, 의존성 배열);


// Effect function이 mount, unmount시에 단 한번씩만 실행되고 싶게 하고싶으면
// 아래와 같이 의존성 배열을 빈 배열로 만들어줌
useEffect(이펙트 함수, []);


// 의존성 배열을 생략하면 Component가 업데이트 될 때마다 호출 됨
useEffect(이펙트 함수);


// ComponentWillUnmount()와 동일한 기능
useEffect(이펙트 함수의 return, []);
```
<br>

```javascript
// 앞서 useState()를 배울때 사용했던 Counter Component에 useEffect를 적용해봄
import React, {userState, useEffect } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);
    
    // 의존성 배열을 생략하고 이펙트함수만 넣었기때문에 
    // 처음 Component가 mount될때 실행됨 -> ComponentDidMount()
    // Component가 업데이트 될 때마다 호출됨 -> ComponentDidUpdate()
    useEffect(() => {
        // 브라우저 API를 사용해서 document의 title을 업데이트함
        // document.title은 웹 페이지를 열었을 때 창에 표시되는 문자열
        document.title = `You clicked ${count } times`; // useEffect()가 count라는 state에 접근한 모습
    });

    return (
        <div>
            <p>총 {count }번 클릭했습니다</p>
            <button onClick={() => setCount(count + 1) }>
                클릭
            </button>
        </div>
    );
}
```
<br>


# useEffect() Hook사용법 재정리
```javascript
useEffect(() => {
    // Component가 마운트 된 이후,
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
    // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한번씩만 실행됨
    // 의존성 배열 생략 시 Component 업데이트 시마다 실행됨
    ...

    return () => {
        // Component가 마운트 해제되기 전에 실행됨
        ...
    }
}, [의존성 변수1, 의존성 변수2, ...]);
```
