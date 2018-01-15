import {hashHistory} from 'react-router'
export const routes={
    childRoutes:[
        {
            path:'/login',
            getComponent:(nextState,cb)=>{
                require.ensure([],(require)=>{
                    cb(null,require('../container/login').default)
                },'login')
            }
        },
        {
          path:'/getinfor',
          getComponent:(nextState,cb)=>{
              require.ensure([],(require)=>{
                  cb(null,require('../container/getinfor').default)
              },'getinfor')
          }
      }
    ]
}