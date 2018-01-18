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

  onSubmit = (e) => {
    e.stopPropagation();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        let val=values.newUserName
        //console.log()
        if (val.trim()!=='') {
          const regname=/^\w{2,15}$/;

          if(val.match(regname)){
            //hashHistory.push({pathname: '/profile/user'})
            this.props.setUser(val);
            this.setState({
              hasError: false,
            });

          }else{
            this.setState({
              hasError: true,
            });
            Toast.info('用户名必须2-15位!');
          }
          //  手机号码11位验证  /^1\d{10}$/
        }
      }
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
    const { getFieldProps } = this.props.form;
    const inputStyle={
        paddingTop:'10px'
    }

    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => hashHistory.push({pathname: '/profile/user'})}
        >
          修改用户名
        </NavBar>
        <div style={inputStyle}>
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
        </div>
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


