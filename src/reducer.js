const ADD_TO_CART = "ADD_TO_CART";
const DELETE_ITEM = "DELETE_ITEM";
const ADD_TO_WISHLIST="ADD_TO_WISHLIST";
const DELETE_WISH ="DELETE_WISH";

export const add_Cart=(people)=>({
    type:ADD_TO_CART,
     payload:{
         people
        }
})

export const delete_Cart=(id)=>({
    type:DELETE_ITEM,
    payload:{
        id
    }
})

export const add_WishList=(people)=>({
    type:ADD_TO_WISHLIST,
    payload:{
        people
    }
})

export const delete_Wish=(id)=>({
    type:DELETE_WISH,
    payload:{
        id
    }
})

const initialStore={
    basket:[],
    WishList:[],
};

export function reducer(state=initialStore,action){
    console.log(action.type);
     switch(action.type){
        case "ADD_TO_CART":
           //console.log(basket)
           return{...state,basket:[...state.basket,action.payload]};
        case "DELETE_ITEM":
            //console.log(action.payload);
            let item = state.basket.filter((item)=>item.people.id!==action.payload.id);
            return{...state,basket:[...item]}
        case "ADD_TO_WISHLIST":
             return{...state,WishList:[...state.WishList,action.payload]}
        case "DELETE_WISH":     
                let items = state.WishList.filter((item)=>item.people.id!==action.payload.id);
                return{...state,WishList:[...items]}
        default:
            return{...state};
     }
}