import React from 'react';

interface propParams {
    width: string, height: string, x: string, y: string, fill: string
}

const Rectangle = ({width, height, x, y, fill}: propParams) => (
    <rect width={width} height={height} x={x} y={y} style={{ fill:fill}} />
)

export default Rectangle;