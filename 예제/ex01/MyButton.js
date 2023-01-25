function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        {onClick: () => setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click Here!'
    )
}

// React Component를 DOM Container에 렌더링하는 코드
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);