function Food({fav}){ // 이런식으로 props object 내부를 열어서 fav를 가져올 수 있음
    return <h2>I like {fav}</h2>;
}
// function Food(props){
//     console.log(props.fav);//props.fav = {fav}랑 같은 의미
//     return <h2>I like Potato</h2>;
// }
/*
 component에 정보를 보낼 수 있음
 React > 재사용 가능한 컴포넌트를 만들 수 있어서 계속해서 반복해서 사용할 수 있다!!
 */
function App() {
  return (
    <div>
      <h1>Hello! :D</h1>
        { /* 컴포넌트에 정보를 보내는 것, kimchi라는 value로 fav 이라는 property(prop)을 준 것
            => string 뿐 아니라, boolean, array 등 상관없음
            -> 이런 것들을 props라고 부름
            father to the children 컴포넌트로 원하는 많은 props를 보낼 수 있음
            => react magic이라는 것은 react가 이걸 보게 되고 react는 모든 속성을 가져옴
            => 컴포넌트의 argument(인자)로 넣을 수 있음            */ }
        <Food fav="kimchi" something={true} papapapa={['hello', 1, 2, 3, 4, true]}/>
        <Food fav="ramen"/>
        <Food fav="samgiopsal"/>
        <Food fav="jjukkumi"/>
        {/* jsx + props 의 힘!
            jsx = HTML + JavaScript
            component는 대문자로 시작해야하고, 컴포넌트로 데이터를 보낼 수 있음
            props = 컴포넌트에 넣게되는 것으로 father 컴포넌트에서 child 컴포넌트로 데이터를 보낼 수 있고 argument로 감*/}
    </div>
  );
}

export default App;
