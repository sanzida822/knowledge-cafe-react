import React from 'react';

const SideRight = (props) => {
   
       const mark=props.mark;
       //console.log(mark)
       const id=mark.id;
        console.log(id)
   
    return (
    <p>{id}</p>   
    );
};

export default SideRight;