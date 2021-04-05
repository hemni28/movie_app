function Food({name, picture}){ // 이런식으로 props object 내부를 열어서 fav를 가져올 수 있음
    return <div>
    <h2>I like {name}</h2>
        <img src={picture}/>
    </div>;
}
// function Food(props){
//     console.log(props.fav);//props.fav = {fav}랑 같은 의미
//     return <h2>I like Potato</h2>;
// }
const foodILike = [
    {
        name: "Kimchi",
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
    },
    {
        name: "Samgyeopsal",
        image:
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
    },
    {
        name: "Bibimbap",
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
    },
    {
        name: "Doncasu",
        image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
    },
    {
        name: "Kimbap",
        image:
            "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
    }
];
/*
 component에 정보를 보낼 수 있음
 React > 재사용 가능한 컴포넌트를 만들 수 있어서 계속해서 반복해서 사용할 수 있다!!
 */
function App() {
  return (
    <div>
        { /* 컴포넌트에 정보를 보내는 것, kimchi라는 value로 fav 이라는 property(prop)을 준 것
            => string 뿐 아니라, boolean, array 등 상관없음
            -> 이런 것들을 props라고 부름
            father to the children 컴포넌트로 원하는 많은 props를 보낼 수 있음
            => react magic이라는 것은 react가 이걸 보게 되고 react는 모든 속성을 가져옴
            => 컴포넌트의 argument(인자)로 넣을 수 있음            */ }
        { foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>) }
        {/* jsx + props 의 힘!
            jsx = HTML + JavaScript
            component는 대문자로 시작해야하고, 컴포넌트로 데이터를 보낼 수 있음
            props = 컴포넌트에 넣게되는 것으로 father 컴포넌트에서 child 컴포넌트로 데이터를 보낼 수 있고 argument로 감*/}
    </div>
  );
}

export default App;
