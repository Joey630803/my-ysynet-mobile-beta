import React, { Component } from 'react';
import { NavBar, Icon, List, WhiteSpace, Badge } from 'antd-mobile';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import Footer from '../../component/footer';
import UserInfo from '../../component/user_info';
import './style.css';

import { onLoad } from '../../action';

const Item = List.Item;

/**
 * @summary 用户模块
 */

class User extends Component {
  constructor(){
    super()
    this.state={
      userInfo:{}
    }
  }
  // state={
  //   userInfo:{}
  // }

  componentWillMount(){
  const onInforLoad=this.props.onInforLoad
    window.Fetch('/userInfo')
    .then(res=>{
      return res.json()
    }).then(data=>{
      onInforLoad(data)
    })
  }
  render () {
    const {user}=this.props
    return this.props.children || (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => hashHistory.push({pathname: '/'})}
        >
          我的
        </NavBar>
        {/* <UserInfo data={this.state.userInfo} 
        onClick={() => hashHistory.push({pathname: '/profile/user',state:this.state.userInfo})}/> */}
        <UserInfo user={user}
        onClick={() => hashHistory.push({pathname: '/profile/user'})}/>
        <WhiteSpace size='md' />
        <List className={'ysynet-userInfo'}>
          <Item arrow="horizontal" onClick={() => {}} thumb={require('../../assets/address16x16.svg')} multipleLine>
            我的地址
          </Item>
        </List>
        <WhiteSpace size='md' />
        <List className={'ysynet-userInfo'}>
          <Item arrow="horizontal" onClick={() => {}} thumb={require('../../assets/hospital16x16.svg')} multipleLine>
            医院
          </Item>
          <Item 
            arrow="horizontal" 
            onClick={() => {}} 
            thumb={require('../../assets/message16x16.svg')}
            multipleLine
            extra={<Badge text={77} overflowCount={55} />}
          >
            消息
          </Item>
          <Item arrow="horizontal" onClick={() => {}} thumb={require('../../assets/data16x16.svg')} multipleLine>
            资料
          </Item>
        </List>
        <WhiteSpace size='md' />
        <List className={'ysynet-userInfo'}>
          <Item arrow="horizontal" onClick={() => {}} thumb={require('../../assets/setting16x16.svg')} multipleLine>
            设置
          </Item>
        </List>
        <Footer active={'profile'}/>
      </div> 
    ) 
  }
}

const mapStateToProps = (state)=>({
  //username:state.user.username
  user:state.user
})
const mapDispatchToProps = (dispatch) => {
  return {
    onInforLoad: (data) => {
      dispatch(onLoad.onLoad(data));
    }
  }
}
//export default User

export default connect(mapStateToProps,mapDispatchToProps)(User);