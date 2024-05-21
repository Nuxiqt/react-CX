import React from 'react';
import CanvasXpress from 'canvasxpress';

const CXComp = ({data, config}) => {
    
    const canvasElement = document.getElementById('canvas', { id: 'canvasId' });
    const cX = new CanvasXpress('canvasId', data, config);
    
    return canvasElement;
    }

export default CXComp;