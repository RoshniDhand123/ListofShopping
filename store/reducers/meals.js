import { Add_Food } from "../actions/types";
import {Total_Items} from "../actions/types";
const initialState = [
 
]

const mealsReducer =(state = initialState , action) => {
    switch(action.type){
        case Add_Food:
          return[
            ...state,
            {
              id: action.id,
              note: action.note
          }]
      //  case Total_Items:

      //   const total = Object.values(items)
      //   .reduce((result, cartItem) => result + cartItem.price, 0);
      //    return[
      //      ...state,
      //      total
      //    ]

           
          return;
           default:

            return state;
    }
}
export default mealsReducer;