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
            name="짱구" 
            introduction="안녕하세요, 짱구입니다" 
            viewCount={1500 } // 중괄호를 사용하면 무조건 자바스크립트 코드가 들어간다
        />
    );
}
```
