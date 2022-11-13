/* eslint-disable */
import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentChild>
            <Component/>
            <Component/>
            <Component/>
            </ComponentChild>
        </CollapseWrapper>
    );
};

const Component = (props) => {
    return <div {...props}>Компонент списка</div>;
};

const ComponentChild = ({children}) => {
    return React.Children.map(children, (child, index)=>{
        const config = {
            ...child.props,
            id: index + 1,
            };
        console.log(config)
        return React.cloneElement(child, config)
    });
};
export default ChildrenExercise;
