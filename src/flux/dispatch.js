import { Dispatcher } from 'flux'
import store from './store'

const buttonDispatcher = new Dispatcher()
buttonDispatcher.register((action) => {
    console.log(action)
    switch (action.actionType) {
        case "ADD":
            store.addItems(action.data)
            break;
        case "DEL":
            console.log(2)
            // 给store里的list添加一项
    }
})
export default  buttonDispatcher;