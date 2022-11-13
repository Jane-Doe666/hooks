/* eslint-disable */
import React, { useEffect, useState } from "react";

const SimpleComponent = ({ onLogin, onLogOut, isAuth })=>{
    const [logStatus, setLogStatus] = useState(isAuth)
    const handleButtonType = ()=>{
        setLogStatus(prevState=> !prevState)
    };

    useEffect(()=>{
        logStatus === false ? onLogin : onLogOut
    }, [logStatus]);

    return (
        <>
         {logStatus === false
            ? <button className="btn btn-primary" onClick={handleButtonType}>Войти</button>
            : <button className="btn btn-primary" onClick={handleButtonType}>Выйти из системы</button>}
    </>);
};
export default SimpleComponent;