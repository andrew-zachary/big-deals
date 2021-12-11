import React,{useState} from 'react';
import {Checkbox} from 'semantic-ui-react';

const LayoutHeader = ({visible, setVisible}) => {
    return <nav>
        <Checkbox 
            checked={visible}
            label={{ children: <code>visible</code> }}
            onChange={(e, data) => setVisible(data.checked)}
        />
    </nav>
}

export default LayoutHeader;