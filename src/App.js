import React from 'react';

class App extends React.Component{
    /*
    state : 보통 동적 데이터와 함께 작업할 때 만들어짐, 즉 변하는 데이터 or 존재하지 않는 데이터 => 이런 것은 props가 돕지 못함
     */
    state = {
        count: 0
    }
    add = () => {
        console.log('add');
        // this.state.count = 1; //이렇게 direct로 하면 react가 render function을 refresh해주지 않음 => setState()를 해줘야함
        this.setState({count: this.state.count + 1});
    };
    minus = () => {
        console.log('minus');
        // *** setState를 호출하면 react는 state를 refresh하고 또한 render function을 호출함 (virtualDOM을 통해 필요한 부분만 update)
        this.setState(current => ({count: current.count - 1}));
        // ㄴ> state를 set할 때, add()에서 처럼 외부의 상태를 가져와서 의존하는 것은 좋지 않음, current를 가져와서 사용할 수 있음
    };
    render() { // react는 자동적으로 class component의 render method를 실행함
        // this.add() 즉시 function 호출! this.add 클릭했을때만 호출!
        return (
        <div>
            <h1>The number is: {this.state.count}.</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
        )
    }
}

export default App;