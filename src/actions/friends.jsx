export const addFriends = (data) => {
    return {
        type: 'ADD_FRIEND',
        payload: data
    }
}

export const removeFriend = (id) => {
    console.log(id)
    return {
        type: 'REMOVE_FRIEND',
        payload: id
    }
}

export const sidebarShow =(value)=>{
    console.log(value)
    return{
        type:'SHOW',
        payload:value
    }
}
export const sidebarHide =(value)=>{
    console.log(value)
    return{
        type:'HIDE',
        payload:value
    }
}