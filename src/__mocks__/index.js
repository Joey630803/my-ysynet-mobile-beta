import React from 'react'
export default {
    '/userInfo': ({ params }) => {
        const userInfo =
            {
              avatar: require('../assets/avatar.png'),
              username: 'Joey Owen',
              number: '135****7725'
            }

        return userInfo;
    },
    '/user/unbindWechat':({param})=>{
        const unBind={
            unbind:'解绑了！'
        }
        // if('undefined' !== typeof params&&params.trim!==''){
        //   console.log(params)
        //   userInfo.username=params
        // }
        return unBind;        
    }
}
