export const INCREMENT ='INCREMENT'
export const DECREMENT ='DECREMENT'
export const increment = (id)=>({
    type : INCREMENT,
    Payload: id


})
export const decrement=(id)=>({
    type : DECREMENT,
    Payload: id
})