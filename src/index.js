import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import lightswitchon from './light-switch-on.png'
import Lightswitchoff from './light-switch-off.png'



const Hooks = () => {
    const [on, setOn] = useState(true);
    const brightness = on ? "lit" : "dark";

    return (
        <div className={`Hooks ${brightness}`}>
            <br />
            <button onClick={() => setOn(true)}>
            <img src={lightswitchon} width="75" height="75" alt="LightSwitch"/>
</button>
            <button onClick={() => setOn(false)}><img src={Lightswitchoff} background="black" width="75" height="75" alt="LightSwitch"/></button>
            <br />
        </div>
    )
};
ReactDOM.render(<Hooks />, document.getElementById('root'));