export const ToDoReducer = (state = [], action) =>{
    switch (action.type){
        case "LOAD_TODOS":
            return [...action.payload];
        case "ADD_TODO":
            return [...state,action.payload];
        case "CLEAR_TODOS":
            return state.filter(e=> !e.done);
        case "TOGGLE_DONE":
            return state.map((e,index)=> index === action.payload ? {...e, done: !e.done} : e);
        default:
            return state;
    }
}