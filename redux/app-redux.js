import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'react-native-firebase';
//import console = require('console');

//init app state: 
const initialState = {
    scheduleData: {},
    speakerData: {},
}

/*
 REDUCERS: 
*/

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case "setScheduleData":
            return{...state, scheduleData: action.value};

        default: 
            return state;
    } 
}

/*
 REDUX STORE: 
*/

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

/*
 ACTION CREATORS: 
*/

const setScheduleData = (scheduleData) => {
    return {
        type: 'setScheduleData',
        value: scheduleData
    }
}

const watchScheduleData = () => {
    return function(dispatch) {
        firebase.database().ref("Schedule").on("value", function(snapshot)
        {
            var scheduleData = snapshot.val();
            var actionSetScheduleData = setScheduleData(scheduleData);
            dispatch(actionSetScheduleData);
        }, function(error) {console.log(error); });
    }
}

export { setScheduleData, watchScheduleData }; 