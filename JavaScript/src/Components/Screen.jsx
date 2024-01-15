import React from "react";
import '../Styles/Screen.css';

function Screen ({input}){
    return(
        <div className='screen-container'>
            {input}
        </div>
    );
}

export default Screen;