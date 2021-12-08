import {Add_Food} from './types';
import {Total_Items} from'./types';
let noteID = 0

//Action
export function addnote(note) {
    return {
      type:  Add_Food,
        id: noteID++,
        note
    }
}

export const updateItemPrice = (price) => dispatch => {
  const result = price + price;

  return dispatch({
    type: Total_Items,
    total: result
  });
};


    