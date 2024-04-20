import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynkFunctinAction } from "../../redux/action";

function AboutPage(){
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(asynkFunctinAction())}></button>
        </div>
    )
}

export default AboutPage