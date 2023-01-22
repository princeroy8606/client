const friendsList = {
    data: [
        {
            id: 8,
            name: "Tom",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfLCs5lVr1Ev5xUChMTIDKUSn5C8Wa223HA&usqp=CAU",
        },
        {
            id: 9,
            name: "jass",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddwWLweaFxOmeLoT4hixHZLU_PzXHEXJQvA&usqp=CAU",
        },
    ]
}

export default function addRemoveFriends(state = friendsList, action) {
    switch (action.type) {
        case 'ADD_FRIEND':
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case 'REMOVE_FRIEND':
            return {
                ...state,
                data: state.data.filter((id) => id !== action.payload)
            }
        default:
            return state

    }
}
