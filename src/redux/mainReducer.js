import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp21194377Reducer from '../features/SignUp21194377/redux/reducers'
import CalendarView4194374Reducer from '../features/CalendarView4194374/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp21194377: SignUp21194377Reducer,
CalendarView4194374: CalendarView4194374Reducer,

});