const ADD_MESSAGE = 'ADD_MESSAGE'; 

let initialState =  {
    dialog_data:
        [{ id: 1, name: "Alex" },
        { id: 2, name: "Sonia" },
        { id: 3, name: "Danylo" },
        { id: 4, name: "Ulia" },
        { id: 5, name: "Noob" },
        ],

    message_data:
        [{ id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "What are you doing?" },
        { id: 4, message: "Who are you?" },
        { id: 5, message: "Bue!" }
        ],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_MESSAGE:
            let newMessage = action.newMessageText;
            let copyState = { ...state, 
                            message_data: [...state.message_data, {id: 6, message: newMessage}]};
     
        return copyState;

        default:
            return state; 
    }
}

export const addMessageAction = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });  

export default dialogsReducer ;