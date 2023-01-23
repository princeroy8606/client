const value = true;
export default function showHideSidebar(state = value, action) {
    console.log(state)
    switch (action.type) {
        case 'SHOW':
            return state = action.payload
        case 'HIDE':
            return state = action.payload
        default:
            return state
    }
}