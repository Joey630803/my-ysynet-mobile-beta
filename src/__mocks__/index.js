import React from 'react'
export default {
    '/userInfo': ({ params }) => {
        const userInfo =
            {
              avatar: require('../assets/avatar.png'),
              username: 'Joey Owen',
              extra: <p className={'phone'}><i></i><span>135****7725</span></p>
            }
            // if('undefined' !== typeof params&&params.trim!==''){
            //   console.log(params)
            //   userInfo.username=params
            // }
        return userInfo;
    }
}
