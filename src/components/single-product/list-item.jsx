import React from "react";
import moment from 'moment';
import StarsCalc from "../../parts/stars-calc.jsx";

const ListItem = ({item}) => {
    console.log(item);
    return (
        <li>
            <h1>by <span>{item.userId.name}</span> on <span>{moment(item.lastTimeVote).format('DD-MM-YYYY')}</span></h1>
            <div className="review-stars-calc">
                <StarsCalc avgRate={item.starsNumber} />
            </div>
            <p>{item.comment}</p>
        </li>
    );
};

export default ListItem;