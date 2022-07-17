export default function (presentation = [], action) {
    if (action.type === 'addPresentation') {
        return action.presentation
    } else {
        return presentation
    }
}