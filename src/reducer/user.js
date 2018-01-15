import {userAction} from '../action'

const {SET_USER} =userAction

const user={}

export default (state=user,action)=>{
    switch(action.type){
        case SET_USER:
        return {...action.result}
        default:
        return state
    }
}