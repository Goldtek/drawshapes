import React from 'react';

interface propParams {
    left: number, 
    top: number, 
    fill: string, 
    radius: number, 
    id: number,  
    ChangeValue: (event: React.MouseEvent<HTMLButtonElement>, id: number)  => void,
    remove: (id: number)  => void
}

const CircleInput = ({left, top, fill, radius, id, ChangeValue, remove}: propParams) => {

    return (
        <div className="inputboxes">
            <h3>Circle  {id}</h3>
           <label> Radius</label> <input type="text" name="radius" value={radius} onChange={(e) => ChangeValue(e,id)} /> <br/>
           <label> Top</label> <input type="text" name="top" value={top} onChange={(e) => ChangeValue(e,id)} /> <br />
           <label> Left </label> <input type="text" name="left" value={left} onChange={(e) => ChangeValue(e,id)} /> <br />
           <label> Color</label>  <input type="text" name="fill" value={fill} onChange={(e) => ChangeValue(e,id)} />
           <button onClick={() => remove(id)}>Delete</button>
        </div>
    )

}

export default CircleInput;