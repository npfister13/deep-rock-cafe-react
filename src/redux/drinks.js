import { DRINKS } from '..shared/drinks'

export const Drinks = (state = DRINKS, action) => {
    switch (action.type) {
        default: 
            return state;
    } 
}