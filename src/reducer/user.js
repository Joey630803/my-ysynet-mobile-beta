//import { userAction } from '../action';
import { updateUser } from '../action';
import { updateHeadImg } from '../action';
import { onLoad } from '../action';

//const { SET_USER } = userAction;
const { UPDATE_USER } = updateUser;
const { ON_LOAD } = onLoad;
const { UPDATE_HEADIMG} = updateHeadImg;

const user = {}

export default (state = user, action) => {
  switch(action.type) {
    // case SET_USER: {
    //   //TODO  保存用户信息
    //   return { ...action.result };
    // }
    case UPDATE_USER:{

      return {
        ...state,
        username:action.text,
        
      }
    }
    case UPDATE_HEADIMG:{

      return {
        ...state,
        avatar:action.img,
        
      }
    }
    case ON_LOAD:{
      return {
        ...action.data
      }
    }
    default: {
      return state;
    }
  }
}