import { observable, computed, action } from 'mobx'
import Axios from 'axios';

class operationStore {
    @observable amount
    @observable vendor
    @observable category
    //use input handler to update state of expenses being entered
    @action inputHandler = (name, value) =>{
        this[name] = value
    }
}

export default new operationStore()