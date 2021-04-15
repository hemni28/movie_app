import React from 'react';
import {Link} from "react-router-dom";
import './Navigation.css'

function Navigation(){
    return <div className="nav">
        {/*<a href="">로 사용하면 html 태그가 작동하여 페이지를 리프레쉬함 => So, <Link to>로 사용!*/}
        {/* Link는 router 밖에서 사용할 수 없음!! */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}

export default Navigation;