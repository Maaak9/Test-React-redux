export default function (state = {height: 70, width: 140, gameStatus: [[],[]]}, action) {
    switch(action.type){
        case 'UPDATE_BOARD':
            return  Object.assign({}, state, {
                    gameStatus: action.payload
                    });
            
            //{ ...state, gameStatus: action.payload };
        case 'TEST' :
            console.log("test");
            break;
    }
    return state;
}