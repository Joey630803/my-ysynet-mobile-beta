import React, { Component } from 'react';
//import { submitUserName } from '../../utils';
import { connect } from 'react-redux';
import { userAction } from '../../action';

import {
   NavBar, 
   Icon, 
   List, 
   WhiteSpace,
   Modal ,
   InputItem , 
   Button,
   WingBlank} from 'antd-mobile';

import { hashHistory } from 'react-router';
import { createForm } from 'rc-form';

/**
 * @summary 修改用户名
 */
class ChangeUserName extends Component {

  onSubmit = (e) => {
    e.stopPropagation();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        let val=values.newUserName
        if (val) {
          console.log(val)
          this.props.setUser({username:val});
        }
        // submitUserName(val).then(
        //   (val) => {
        //     if (val) {
        //       hashHistory.push({pathname: '/profile/user'})
        //       this.props.setNewName({username: 'vania'})
        //     } else {
        //       //如果格式不对则
        //       alert('无法提交')
        //     }
        //   },
        //   (err) => {
        //     console.log(err);
        //   }
        // )
      }
    });
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
    setUser: (user) => {
      dispatch(userAction.setUserMapper(user));
    }
  }
}

const ChangeUserNames = createForm()(ChangeUserName)
const ChangeUserNamesss=connect(null,mapDispatchToProps)(ChangeUserNames)
export default ChangeUserNamesss
