import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon, List, WhiteSpace, Modal } from 'antd-mobile';

import { fetchData, compressImage , compressImage_jiu } from '../../utils';

import { hashHistory } from 'react-router';
import { logout } from '../../utils';
const alert = Modal.alert;
/**
 * @summary 用户详情
 */
// const userInfo = {
//   avatar: require('../../assets/avatar.png'),
//   username: '萌萌的拖鞋酱',
//   wechat: 18607107725,
// }

class User extends Component{
  constructor(){
    super()
    
    this.state={
      imgUrl:'',
    }
  }
  upload = () => {
    const Input = this.refs.upload;
    Input.click();
  }
  inputChange=()=>{
    const Input = this.refs.upload;
    var fil = Input.files[0];
    this.beforeUpload(fil)
    
  }
  beforeUpload=(fil)=>{

      const isGif = fil.type === 'image/gif';

      if (isGif) alert('格式不支持Gif')

      const isLt2M = fil.size / 1024 / 1024 < 2;

      if (!isLt2M) alert('头像必须小于2M')
      
      if(!isGif && isLt2M) this.reads(fil)
      
  }
  reads=(fil)=>{

    var reader = new FileReader();

    reader.readAsDataURL(fil);

    reader.onload=(e)=>{
      
      let result = e.target.result;
      compressImage_jiu(result, newImgData => {
          //console.log(newImgData)
          this.setState({imageUrl:newImgData})
      })
      //this.setState({imageUrl:reader.result})
    }
  }

  changeName=()=>{
    hashHistory.push({pathname: '/profile/user/changename'})
  }

  logoutClick = () => {
    alert('退出', '是否确认退出？', [
      { text: '取消', style: 'default' },
      { text: '确定', onPress: () => 
        logout().then(data => {
          if (data.result) {
            hashHistory.push({pathname: '/login'})
          } else {
            alert('桥等麻袋')
          }
        })
      },
    ]);
  }
  render(){
    const imageUrl = this.state.imageUrl;
    const s=this.props.location.state;
    console.log(s)
    return this.props.children || (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => hashHistory.push({pathname: '/profile'})}
        >
          账户信息
        </NavBar>
        <List>

          <List.Item 
            onClick={this.upload}
            arrow="horizontal"
            className={'ysynet-userInfo'} 
            extra={<img className={'avatar'} alt='avatar' src={
              imageUrl ? imageUrl :userInfo.avatar
            }/>}
            ref="headerPhoto"
            >
            头像
            <input type='file' style={{display: 'none'}} ref='upload' 
            accept="image/png, image/jpg" onChange={this.inputChange}/>
            
          </List.Item>

          <List.Item 
          onClick={this.changeName} 
          extra={s.username}
          >
          用户名
          </List.Item>

        </List>
        <List renderHeader={() => '账号绑定'}>
          <List.Item extra={<a>解绑</a>}>微信号</List.Item>
        </List>
        <List renderHeader={() => '安全设置'}>
          <List.Item extra={'修改密码'}>登录密码</List.Item>
        </List>
        <WhiteSpace size='xl' />
        <List>
          <List.Item 
            className={'ysynet-userInfo logout'}
            onClick={this.logoutClick}
          >
            退出登录
          </List.Item>
        </List>  
      </div>  
    )
  }
}

export default User