import React from 'react';


interface propParams {
    x1: string, 
    y1: string, 
    x2: string, 
    y2: string, 
    height: string, 
    width: string, 
    color: string, 
    thickness: number, 
    id: number, 
    ChangeValue: (event: React.MouseEvent<HTMLButtonElement>, id: number)  => void,
    remove: (id: number)  => void
}

const LineInput = ({x1, y1, x2, y2, height, width, color, thickness, id, ChangeValue, remove}: propParams) => {

    return (
        <div className="inputboxes">
            <h3>Line {id}</h3>
           <label> Width</label> <input type="text" name="width" value={width} onChange={(e) => ChangeValue(e,id)}  /> <br/>
           <label> X1</label> <input type="text" name="x1" value={x1} onChange={(e) => ChangeValue(e,id)} /> <br />
           <label> X2 </label> <input type="text" name="x2" value={x2} onChange={(e) => ChangeValue(e,id)} /> <br />
           <label> Height </label>  <input type="text" name="height" value={height} onChange={(e) => ChangeValue(e,id)} /> <br/>
           <label> Y1</label> <input type="text" name="y1" value={y1} onChange={(e) => ChangeValue(e,id)} /> <br />
           <label> Y2 </label> <input type="text" name="y2" value={y2} onChange={(e) => ChangeValue(e,id)} /> <br />
           <label> Color</label>  <input type="text" name="color" value={color} onChange={(e) => ChangeValue(e,id)} />
           <button onClick={() => remove(id)} className="btn">Delete</button>
        </div>
    )

}

export default LineInput