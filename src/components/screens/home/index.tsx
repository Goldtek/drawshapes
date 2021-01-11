import React, { Fragment, useEffect, useState } from 'react';

import "./styles.css";
import { Rectangle, Line, Circle, RectangleInput, LineInput, CircleInput } from '../../custom';

const Home = () => {
    const [shapes, setShapes] = useState([]);
    const [inputList, setInputList] = useState([] as any);
    const [boxes, setInputBox] = useState([] as any);
    const [circle, setCircle] = useState(false);
    const [rect, setRect] = useState(false);
    const [line, setline] = useState(false);
    const shape: any = [];

    useEffect(() => {
        if(circle){
            createCircle();
        }

        if(rect){
            createRectangle();
        }

        if(line){
            createLine();
        }

    }, [circle, rect, line])

    const addCircle =  () => {
        setInputList([...inputList, { top: 150, left: 150, radius: 80, fill: "#000" }]);
        setCircle(true); 
    }

    const createCircle = () => {
        const index = inputList.length - 1;
           setInputBox([...boxes, <CircleInput top={inputList[index].top} left={inputList[index].left} radius={inputList[index].radius} fill={inputList[index].fill} key={index}  />]) 
        shape.push([...shapes, <Circle top={inputList[index].top} left={inputList[index].left} radius={inputList[index].radius} fill={inputList[index].fill} key={index} />]);
        setShapes(shape);
        setCircle(false); 
    }

    const addRect = () => {
        setInputList([...inputList,  { left: "220", top: "220" , width: "200", height: "200", fill: "#FF0" }]);
        setRect(true);
    }

    const createRectangle = () => {
        const index = inputList.length - 1;
        setInputBox([...boxes, <RectangleInput width={inputList[index].width} height={inputList[index].height} left={inputList[index].left} top={inputList[index].top} fill={inputList[index].fill} key={index}  />]);
        shape.push([...shapes, <Rectangle width={inputList[index].width} height={inputList[index].height} left={inputList[index].left} top={inputList[index].top} fill={inputList[index].fill} key={index} />]) ;
        setShapes(shape);
        setRect(false);
    }

    const addLine = () => {
        setInputList([...inputList, {x1: "100", y1: "100", x2: "200", y2:"200", height:"200", width:"200", color:"green", thickness:3}]);
        setline(true);
    }

    const createLine = () => {
        const index = inputList.length - 1;
        setInputBox([...boxes, <LineInput x1={inputList[index].x1} y1={inputList[index].y1} x2={inputList[index].x2} y2={inputList[index].y2} height={inputList[index].height} width={inputList[index].width} color={inputList[index].color} thickness={inputList[index].thickness} key={index} /> ])
        shape.push([...shapes, <Line x1={inputList[index].x1} y1={inputList[index].y1} x2={inputList[index].x2} y2={inputList[index].y2} height={inputList[index].height} width={inputList[index].width} color={inputList[index].color} thickness={inputList[index].thickness} key={index} />]);
        setShapes(shape);
        setline(false);
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
                {boxes.map((box)=> (box))}
            </div>
        </Fragment>
        
    );
}

export default Home;