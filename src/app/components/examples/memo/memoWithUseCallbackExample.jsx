/* eslint-disable */
import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({onLogout}) =>{
    useEffect(()=>{
        console.log("render button")
    });
    return <button className="btn btn-primary" onClick={onLogout}>LogOut</button>
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState){
    if (prevState.onLogOut !== nextState.onLogOut){
        return false
    };
    return true
};

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual)

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback (
        () => {localStorage.removeItem("auth")}, []
    );

    return <>
        <button className="btn btn-primary" onClick={()=>setState(!state)}>initiate rerender</button>
        <MemoizedLogOutButton onLogout={handleLogOut}/>
    </>;
};

export default MemoWithUseCallbackExample;
