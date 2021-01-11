import React from 'react';

interface propParams {
    width: string, height: string, left: string, top: string, fill: string, key: number
}

const RectangleInput = ({width, height, left, top, fill, key}: propParams) => {

    return (
        <div className="inputboxes">
            <h3>Rectangle {key}</h3>
           <label> Width</label> <input type="text" name="width" value={width} /> <br/>
           <label> Top</label> <input type="text" name="top" value={top} /> <br />
           <label> Left </label> <input type="text" name="left" value={left} /> <br />
           <label> Height </label>  <input type="text" name="height" value={height} /> <br/>
           <label> Color</label>  <input type="text" name="color" value={fill} />
        </div>
    )

}

export default RectangleInput