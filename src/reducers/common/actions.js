import { RECEIVE_ERROR } from './types.js';

export const receiveError = (error) => {
    return {
        type: RECEIVE_ERROR,
        erorr = error
    }
}