import React from 'react';

interface propParams {
    left: number, top: number, fill: string, radius: number, key: number
}

const CircleInput = ({left, top, fill, radius, key}: propParams) => {

    return (
        <div className="inputboxes">
            <h3>Circle 1 {key}</h3>
           <label> Radius</label> <input type="text" name="width" value={radius} /> <br/>
           <label> Top</label> <input type="text" name="top" value={top} /> <br />
           <label> Left </label> <input type="text" name="left" value={left} /> <br />
           <label> Color</label>  <input type="text" name="color" value={fill} />
        </div>
    )

}

export default CircleInput;