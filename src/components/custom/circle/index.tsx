import React from 'react';

interface propParams {
    left: number, top: number, fill: string, radius: number
}

const Circle = ({left, top, fill, radius}: propParams) => {
    return (
        <circle  cx={left} cy={top} r={radius} fill={fill} />
    )
}

export default Circle;