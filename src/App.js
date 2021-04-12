import React from 'react';
import axios from 'axios';

class App extends React.Component{
    /*
    Life Cycle : component의 대부분을 컨트롤할 수 있음
    - Mounting
    1) 먼저 호출되는 fucntion은 constructor()
    2) 그리고 나서 render()
    3) 그리고 나서 componentDidMount()
    - Updating
    >> 내가 변경하는 것들
    - UnMounting
    >> component가 죽을 때 (ex. 다른 페이지로 이동 등)
     */
    constructor() {
        super();
    }
    /*
    state : 보통 동적 데이터와 함께 작업할 때 만들어짐, 즉 변하는 데이터 or 존재하지 않는 데이터 => 이런 것은 props가 돕지 못함
    *** setState를 호출하면 react는 state를 refresh하고 또한 render function을 호출함 (virtualDOM을 통해 필요한 부분만 update)
     */
    state = {
        isLoading: true,
        movies: [] // 처음에 선언하는 것이 필수는 아님
    }
    /*
     axios는 느리기 때문에 componentDidMount가 끝날때까지 시간이 걸릴 수 있다고 말해야함
     & 우리는 그걸 기다려야하기 때문에 async - await 붙여줌 (이것이 비동기다!!)
     */
    getMovies = async () => {
        // axios => fetch위에 있는 작은 layer와 같음
        // 참고 : https://github.com/serranoarevalo/yts-proxy
        const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    }
    componentDidMount() { // component가 mount 되자마자 호출됨
        this.getMovies();
    }

    render() { // react는 자동적으로 class component의 render method를 실행함
        const { isLoading } = this.state;
        return (
        <div>{isLoading ? 'Loading...' : 'We are ready!'}</div>
        )
    }
}

export default App;