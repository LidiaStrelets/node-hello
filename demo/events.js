const EventEmmiter = require('events');
const { emitKeypressEvents } = require('readline');

// const emmiter = new EventEmmiter()

// emmiter.on('anything', data => {
//     console.log('ON: anything - ', data);
// })
// emmiter.emit('anything', { x: 'string' });


// setTimeout(() => {
//     emmiter.emit('anything', { c: 54 })
// },2500)

class Dispatcher extends EventEmmiter{
    subscribe(event, action) {
        console.log('Subscribed');
        this.on(event, action)
    }
    dispatch(event, data) {
        console.log('Dispatching');
        this.emit(event, data)
    }
}

const myDis = new Dispatcher();

myDis.subscribe('go', data => {
    console.log(data);
})

myDis.dispatch('go', {y:768})