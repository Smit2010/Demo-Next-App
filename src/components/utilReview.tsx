import React from 'react';
import { Review } from '../actions/types'

interface Props {
    reviewElement: Review,
    renderOptions: any,
}

const UtilReview: React.FC<Props> =  ({reviewElement, renderOptions}) => {
    return(
        <div className={reviewElement.id}>
                {reviewElement.user} {reviewElement.timestamp}
                {renderOptions}
                <h1>
                    {reviewElement.review}
                </h1>   
        </div>
    )
}

export default UtilReview;