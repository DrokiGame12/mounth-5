import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { changeTitleAction } from "../../redux/action";

function MainPage() {
    const dispatch = useDispatch()
    const title = useSelector(state => state.titleReduser.title)

    return (
        <div>
            <h1>{ title }</h1>
            <button onClick={() => dispatch(changeTitleAction())}>Click</button>
        </div>
    )
}

export default MainPage