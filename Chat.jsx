import React, { useEffect, useState } from 'react'

const Resize = () => {

    const [screensize,setscreensize]=useState({
     width: window.innerWidth,
     height:window.innerHeight,
    });
    
    const updatescreensize=()=>{
        setscreensize({
    width: window.innerWidth,
    height:window.innerHeight,
        });
    };

    useEffect(()=>{
        window.addEventListener('resize',updatescreensize);
        return()=>{
            window.removeEventListener('resize',updatescreensize);
        };
    },[]);

    return(
        <div>
            <h1>Screen Size Example</h1>
            <p st>Resize the window tob see the screen size:</p>    
            <p style={{color:"Red"}}>width:{screensize.width}px</p>           
            <p style={{color:"Red"}}>width:{screensize.height}px</p>           

            </div>
    )
}

export default Resize