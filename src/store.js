import { legacy_createStore as createStore } from 'redux';

const store = createStore(reducer);


function reducer() {
    return {
        title: "",
    };
}

export default store;
