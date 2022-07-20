export default function (selection = [], action) {
    if (action.type === 'selectedCategorie') {
        return action.selection
    } else {
        return selection
    }
}