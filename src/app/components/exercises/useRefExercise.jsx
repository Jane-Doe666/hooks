import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const refStyle = useRef();
    const refText = useRef("block");
    const [newBlock, setNewBlock] = useState(false);
    const handleChangeStyle = () => {
        setNewBlock(prevState => !prevState);
        refStyle.current.style.width = "80px";
        refStyle.current.style.height = "150px";
    };
    useEffect(() => {
        refText.current = "test";
    }, [newBlock]);

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <div>
                <button className="btn btn-primary" onClick={handleChangeStyle}>Change block</button>
            </div>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div ref={refStyle}
                 className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                 style={{
                     height: 40,
                     width: 60,
                     color: "white"
                 }}
            >
                <small>{refText.current}</small>
            </div>
        </CollapseWrapper>
    );
};
export default UseRefExercise;
