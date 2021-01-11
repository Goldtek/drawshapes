import React from 'react';

interface propParams {
    x1: string, y1: string, x2: string, y2: string, height: string, width: string, color: string, thickness: number
}

const Line = ({x1, y1, x2, y2, height, width, color, thickness}: propParams) =>{

    return (
        <svg height={height} width={width}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke:color, strokeWidth: thickness}} />
        </svg>
    )
}

export default Line;