export default function (photos = [], action) {
    if (action.type === 'addPhoto') {
        return action.photos
    } else {
        return photos
    }
}