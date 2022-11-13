/* eslint-disable */
import React from "react";

const withFunctions = (Component)=>(props)=>{
    const isAuth = localStorage.getItem("auth") ? true : false;
    const onLogin = ()=>{localStorage.setItem("auth", "token")}
    const onLogOut = ()=>{localStorage.clear()}

    return (<>
        <div className="card my-2">
            <div className="card-body">
                <Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} {...props}
            />
            </div>
        </div>
    </>)
}

export default withFunctions;