import React, { Fragment, useState } from 'react';

import "./styles.css";
import { Rectangle, Line, Circle } from '../../custom';

const Home = () => {
    const [shapes, setShapes] = useState([]);
    const [inputList, setInputList] = useState([] as any);
    const shape: any = [];

    const addCircle = async () => {
        await setInputList([...inputList, { top: 150, left: 150, radius: 80, fill: "#000" }]);
        const data = inputList[inputList.length - 1];
        console.log('data', data);
       // shape.push([...shapes, <Circle top={data.top} left={data.left} radius={data.radius} fill={data.fill} />]);
       // setShapes(shape)
    }

    const addRect = () => {
        setInputList([...inputList,  { x: "220", y: "220" , width: "200", height: "200", fill: "#FF0" }]);
        const data = inputList[inputList.length - 1];
        shape.push([...shapes, <Rectangle width={data.width} height={data.height} x={data.x} y={data.y} fill={data.fill} />]) ;
        setShapes(shape);
    }

    const addLine = () => {
        setInputList([...inputList, {x1: "100", y1: "100", x2: "200", y2:"200", height:"200", width:"200", color:"green", thickness:2}]);
        const data = inputList[inputList.length - 1];
        shape.push([...shapes, <Line x1={data.x1} y1={data.y1} x2={data.x2} y2={data.y2} height={data.height} width={data.width} color={data.color} thickness={data.thickness} />]);
        setShapes(shape);
    }

    return(
        <Fragment>
            <svg className="container">
                {shapes.map((s)=> (s))}
               
            </svg>
            <div className="button-container">
            <button type="button" className="button" onClick={addCircle}>Add Circle</button>
            <button type="button" className="button" onClick={addRect}>Add Rectangle</button>
            <button type="button" className="button" onClick={addLine}>Add Line</button>
            </div>
            <h2>Shapes</h2>
            <div className="config">
                
            </div>
        </Fragment>
        
    );
}

export default Home;