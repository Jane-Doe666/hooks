/* eslint-disable */
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import { useEffect, useRef, useState } from "react";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleRenderCount = () => {
        setOtherState(prevState => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prevState.current = otherState
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>Current state: {otherState}</p>
            <p>PrevState : {prevState.current}</p>
            <button className="btn btn-primary"
                    onClick={toggleRenderCount}
            >
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
