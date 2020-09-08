import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

let store = {

    _callSubscriber() {
        console.log("Change");
    },


    _state: {

        dialogsPage: {
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
            
            newMessageText: " "   
        },



        profilePage: {        
            post_data:
                [{ id: 1, message: "Hi, how are you?", likeCount: 10 },
                { id: 2, message: "Hi, how are you?", likeCount: 14 },
                { id: 3, message: "Hi, how are you?", likeCount: 26 },
                { id: 4, message: "Hi!", likeCount: 29 },
                { id: 5, message: "Yo!!!", likeCount: 32 },
                { id: 6, message: "Bla-bla-bla", likeCount: 82 }
                ],
            newPostText: " "
        }
    },

    getStore() {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._state.profilePage = profileReducer(this._state.profilePage, action);

       this._callSubscriber(this._state);
    }
};    


export default store;

