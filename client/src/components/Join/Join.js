import React, {useState} from "react";
import {Link } from "react-router-dom";

import "./Join.css";

const Join = ()=>{
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [loading,setLoading] = useState(false);
    function handleOnClick(event){
        if(!name || !room){
            setLoading(true);
            return event.preventDefault();
        }
        
        return null;
    }
        return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" 
                            onChange={(event)=>setName(event.target.value)} />
                </div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" 
                            onChange={(event)=>setRoom(event.target.value)} />
                </div>
                <Link onClick={handleOnClick} 
                    to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">
                        {loading && (<i className="fa fa-circle-o-notch fa-spin"></i>)}Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Join;