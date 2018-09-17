import * as ActionTypes from '../ActionTypes';
import AppDispatcher from '../AppDispatcher';
import EventEmitter from 'events';


const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function () {
        return counterValues;
    },
    emitChange: function () {
        this.emit('change');
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
    if(action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCation] ++;
        CounterStore.emitChange();
    }else if(action.type === ActionTypes.DECREMENT) {
        counterValues[action.counterCation] --;
        CounterStore.emitChange();
    }
});

export default CounterStore;