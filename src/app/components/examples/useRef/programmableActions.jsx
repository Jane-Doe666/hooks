import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider/>
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={inputRef} id="email" type="email" className="form-label"/>
            <button className="btn btn-primary" onClick={handleClick}>Button Focus</button>
            <button className="btn btn-primary" onClick={handleClickWidth}>Button change width</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
