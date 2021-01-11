import React from 'react';

interface propParams {
    width: string, height: string, left: string, top: string, fill: string
}

const Rectangle = ({width, height, left, top, fill}: propParams) => (
    <rect width={width} height={height} x={left} y={top} style={{ fill:fill}} />
)

export default Rectangle;