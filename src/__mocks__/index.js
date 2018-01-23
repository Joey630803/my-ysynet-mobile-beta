//import React from 'react'
export default {
    '/userInfo': ({ params }) => {
        const userInfo =
            {
              avatar: require('../assets/avatar.png'),
              username: 'Joey Owen',
              number: '13550787725'
            }

        return userInfo;
    },
    '/insInfo': ({ params }) => {
        const insInfo =
            {
              institution:'西安摩摩科技有限公司',
              username: '张全蛋',
              number: '135****7725',
              department:'编剧部',
              usergroup:'编剧组'
            }

        return insInfo;
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
