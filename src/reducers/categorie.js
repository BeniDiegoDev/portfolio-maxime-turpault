export default function (categorie = [], action) {
    if (action.type === 'addCategorie') {
        console.log(action.categorie)
        return action.categorie
    } else {
        return categorie
    }
}