import {EventEmitter} from 'events'
// EventEmitter.prototype.emit("zidingyi")       EventEmitter.prototype.on("zidingyi", () => {})
// pubsub   pubsub.publish()   pubsub.subscribe()
// 1. 存放数据
// 2. 修改数据
// 3. 通知视图层数据修改了
// Object.assign()
const store = Object.assign({}, EventEmitter.prototype, {
    list: ["items"],
    getList() {
        return this.list
    },
    addItems(item) {
        this.list.push(item)
        this.emitAdd()
    },
    addListener(callback) {
        console.log('监听器')
        // EventEmitter.prototype => this
        this.on("add", callback)
    },
    emitAdd() {
        this.emit("add") 
    }
})
export default store