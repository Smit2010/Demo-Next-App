import { Review, ReviewActionTypes, SUBMIT_REVIEW, EDIT_REVIEW, DELETE_REVIEW } from "./types";

export const submitReview = (newReview: Review): ReviewActionTypes => {
    //window.console.log(newReview);
    return{
        type: SUBMIT_REVIEW,
        payload: newReview
    }
}

export const editReview = (newReview: Review): ReviewActionTypes => {
    return{
        type: EDIT_REVIEW,
        payload: newReview
    }
}

export const deleteReview = (id: string): ReviewActionTypes => {
    return{
        type: DELETE_REVIEW,
        payload: id
    }
}