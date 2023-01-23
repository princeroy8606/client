export const addFriends = (data) => {
    return {
        type: 'ADD_FRIEND',
        payload: data
    }
}

export const removeFriend = (id) => {
    return {
        type: 'REMOVE_FRIEND',
        payload: id
    }
}

export const sidebarShow = (value) => {
    return {
        type: 'SHOW',
        payload: value
    }
}
export const sidebarHide = (value) => {
    return {
        type: 'HIDE',
        payload: value
    }
}