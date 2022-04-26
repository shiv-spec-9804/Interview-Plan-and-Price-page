
import React from "react";

import {CDBProgress, CDBContainer} from "cdbreact";



export const Progressbar =()=>{

   
    <CDBContainer>
        <CDBProgress 
           value={25}
           max={100}
           min={0}
           text={`${25}%`}
        />

       
    </CDBContainer>
}