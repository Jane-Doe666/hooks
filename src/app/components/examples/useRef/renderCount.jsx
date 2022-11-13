import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    const toggleRenderCount = () => {
        setOtherState(!otherState);
    };
    useEffect(() => {
        console.log("12");
        renderCount.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary"
                    onClick={toggleRenderCount}
            >
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
