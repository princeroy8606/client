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