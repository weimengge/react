import buttonDispatcher from './dispatch'
const action = {
    addItem(data) {
        buttonDispatcher.dispatch({
            actionType: "ADD",
            data: data
        })
    },
    del() {
        buttonDispatcher.dispatch({
            actionType: "DEL",
        })
    }
}
export default action