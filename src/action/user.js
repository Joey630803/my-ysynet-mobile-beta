//获取用户信息
export const SET_USER='SET_USER'
export const set_user=(user)=>({
    type:SET_USER,
    user
})

export const setUserMapper=user=>(
    dispatch=>(
        dispatch(set_user(user))
    )
)