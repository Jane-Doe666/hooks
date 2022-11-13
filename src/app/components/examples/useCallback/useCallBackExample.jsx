import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);
    const handelChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };
    // With callBack
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallback]);

    // Without callBack
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback: {withOutCallBack.current}</p>
            <p>Render withCallback: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input
                id="email"
                type="email"
                className="form-label"
                value={data.email || ""}
                name="email"
                onChange={handelChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
