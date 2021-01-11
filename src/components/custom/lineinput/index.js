import React from 'react';

interface propParams {
    x1: string, y1: string, x2: string, y2: string, height: string, width: string, color: string, thickness: number, key: number
}

const LineInput = ({x1, y1, x2, y2, height, width, color, thickness, key}: propParams) => {

    return (
        <div className="inputboxes">
            <h3>Line {key}</h3>
           <label> Width</label> <input type="text" name="width" value={width} /> <br/>
           <label> X1</label> <input type="text" name="top" value={x1} /> <br />
           <label> X2 </label> <input type="text" name="left" value={x2} /> <br />
           <label> Height </label>  <input type="text" name="height" value={height} /> <br/>
           <label> Y1</label> <input type="text" name="top" value={y1} /> <br />
           <label> Y2 </label> <input type="text" name="left" value={y2} /> <br />
           <label> Color</label>  <input type="text" name="color" value={color} />
        </div>
    )

}

export default LineInput