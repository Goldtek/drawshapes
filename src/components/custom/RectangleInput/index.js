import React from 'react';

interface propParams {
    width: string, height: string, left: string, top: string, fill: string, id: number,  ChangeValue: (event: React.MouseEvent<HTMLButtonElement>, id: number)  => void
}

const RectangleInput = ({width, height, left, top, fill, id, ChangeValue}: propParams) => {

    return (
        <div className="inputboxes">
            <h3>Rectangle {id + 1}</h3>
           <label> Width</label> <input type="text" name="width" value={width} onChange={(e) => ChangeValue(e,id)} /> <br/>
           <label> Top</label> <input type="text" name="top" value={top} onChange={(e) => ChangeValue(e,id)} /> <br />
           <label> Left </label> <input type="text" name="left" value={left} onChange={(e) => ChangeValue(e,id)} /> <br />
           <label> Height </label>  <input type="text" name="height" value={height} onChange={(e) => ChangeValue(e,id)} /> <br/>
           <label> Color</label>  <input type="text" name="color" value={fill} onChange={(e) => ChangeValue(e,id)} />
        </div>
    )

}

export default RectangleInput