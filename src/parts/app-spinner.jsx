import React, {useEffect} from "react";
import {Spinner} from "react-bootstrap";
import {useSelector} from "react-redux";

const AppSpinner = () => {
    const {show} = useSelector(state=>state.app.globalSpinner);
    useEffect(()=>{
        if(show) {
            document.body.classList.add("bd-scroll-hidden");
        } else {
            document.body.classList.remove("bd-scroll-hidden");
        }
    }, [show]);
    return <>
        { show && <div id="app-spinner">
            <div id="spinner-box" className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div> }
    </>
};

export default AppSpinner;