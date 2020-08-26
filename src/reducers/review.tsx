import { Reviews, ReviewActionTypes, SUBMIT_REVIEW, EDIT_REVIEW, DELETE_REVIEW } from "../actions/types";

const initialState: Reviews = {
    reviews: []
}

export default function review(state = initialState, action: ReviewActionTypes): Reviews{
    switch (action.type) {
        case SUBMIT_REVIEW:
            /* window.console.log(state);
            window.console.log(action); */
            return {
                ...state,
                reviews: [...state.reviews, action.payload]
            }
        
        case EDIT_REVIEW:
            return{
                reviews: [...state.reviews, action.payload]
            }

        case DELETE_REVIEW:
            return{
                reviews: state.reviews.filter(
                    review => review.id !== action.payload
                )
            }

        default:
            return state
    }
}