export interface Review {
    user: string
    review: string
    timestamp: any
    id: string
}

export interface Reviews {
    reviews: Review[]
}

export const SUBMIT_REVIEW = 'SUBMIT_REVIEW'
export const DELETE_REVIEW = 'DELETE_REVIEW'
export const EDIT_REVIEW = 'EDIT_REVIEW'

interface SubmitReview {
    type: typeof SUBMIT_REVIEW
    payload: Review
}

interface EditReview {
    type: typeof EDIT_REVIEW
    payload: Review
}

interface DeleteReview {
    type: typeof DELETE_REVIEW
    payload: string
}

export type ReviewActionTypes = SubmitReview | DeleteReview | EditReview;