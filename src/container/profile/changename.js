import React, { Component } from 'react';
//import { submitUserName } from '../../utils';
import { hashHistory } from 'react-router';
import { createForm } from 'rc-form';
import {
  NavBar, 
  Icon, 
  WhiteSpace,
  InputItem , 
  Button,
  WingBlank,
  Modal,
  Toast
 } from 'antd-mobile';

import { connect } from 'react-redux';

import { updateUser } from '../../action';

const alert = Modal.alert;

/**
 * @summary 修改用户名
 */
class ChangeUserName extends Component {

  state = {
    hasError: false
  }
  getEntrylen=(val)=>{
    var len = 0;
    for (var i = 0; i < val.length; i++) {
       var length = val.charCodeAt(i);
       if(length>=0&&length<=128)
        {
            len += 1;
        }
        else
        {
            len += 2;
        }
    }
    return len;
  }
  onSubmit = (e) => {
    e.stopPropagation();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        let val=values.newUserName.trim()
        //console.log()
        if (val!=='') {

          let len = 0;           
                         
          for (let i in val){
            let length = val.charCodeAt(i);

            if(length<0||length>128)
            {
                len += 2
            }else{
                len += 1
            }
          }

          const han = /[\u4e00-\u9fa5]/
          const hanzi = /^[\u4e00-\u9fa5]+$/
          const regname=/^[a-zA-Z0-9]{2,15}$/
          

          if(han.test(val)){
            if(val.match(hanzi)){            
              if(2<len&&len<30){
                this.props.setUser(val);
                this.setState({
                  hasError: false,
                });
                hashHistory.push({pathname: '/profile/user'})

              }else{

                this.setState({
                  hasError: true,
                });
                Toast.info('如果全是汉字，用户名必须2-30位!');
              }
            }
            else if(2<len&&len<15){
              this.props.setUser(val);
              this.setState({
                hasError: false,
              });
              hashHistory.push({pathname: '/profile/user'})
            }
            else{
              
              this.setState({
                hasError: true,
              });
              Toast.info('如果汉字字母组合，用户名必须2-15位!');
            }
          }
            else if(val.match(regname)){
              this.props.setUser(val);
              this.setState({
                hasError: false,
              });
              hashHistory.push({pathname: '/profile/user'})

            }else{
                this.setState({
                  hasError: true,
                });
                Toast.info('如果字母数字组合，用户名必须2-15位!');
              }
          //  手机号码11位验证  /^1\d{10}$/
            }}
    });
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('用户名必须2-15位!');
    }
  }
  onFocus=(value)=>{
    if (this.state.hasError) {
      const {hasError}=this.state
      this.setState({hasError:false})
    }
  }

  render () {

    const { getFieldProps } = this.props.form

    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => hashHistory.push({pathname: '/profile/user'})}
        >
          修改用户名
        </NavBar>

        <WhiteSpace size='md' />

          <InputItem
          onFocus={this.onFocus}
          error={this.state.hasError}
          onErrorClick={this.onErrorClick}

              {...getFieldProps('newUserName', {
                rules: [
                  { required: true }
                ]
              })}
              placeholder="修改用户名"
              clear
              moneyKeyboardAlign="left"
              // onBlur={(v) => {console.log(v)}}
            />
        <WingBlank className="my_button">
          <Button type="primary" onClick={this.onSubmit}>保存</Button><WhiteSpace />
        </WingBlank>
      </div>  
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (text) => {
      dispatch(updateUser.updateUser(text));
    }
  }
}

const ChangeUserNames = createForm()(ChangeUserName)
const ChangeUserNamesss=connect(null,mapDispatchToProps)(ChangeUserNames)
export default ChangeUserNamesss


