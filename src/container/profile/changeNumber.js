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
import { updateNumber } from '../../action';

const alert = Modal.alert;

/**
 * @summary 修改用户名
 */
class ChangeUserNumber extends Component {

  state = {
    hasError: false
  }

  onSubmit = (e) => {
    e.stopPropagation();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        let val=values.newNumber.trim()
        const pattern = /^1[3|4|5|7|8]\d{1}\s\d{4}\s\d{4}$/;
        
          if(val.match(pattern)){
            this.props.changeNumber(val)
            }else{
                this.setState({
                  hasError: true,
                });
                Toast.info('手机格式不对!');
              }
      }
    })
  }

  // const pattern = /^1[3|4|5|7|8]\d{1}\s\d{4}\s\d{4}$/;
  // pattern.test(str);



  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('手机格式不对!');
    }
  }
  onFocus=(value)=>{
    if (this.state.hasError) {
      const {hasError}=this.state
      this.setState({hasError:false})
    }
  }
  onChange=(e)=>{
    const E=e.target.value.trim()
    const pattern = /\d|\s/g
    if(!E.match(pattern)){
    Toast.info('只能输入数字!')
    }
  }
onKeyUp=(e)=>{
  // const E=e.target.value.replace(/^ +| +$/g,'')
  const E=e.target.value.trim()
  let end = e.target.selectionEnd
  let st = e.target.selectionStart
  //const node = this.refs.nod

  if(E!==''){
    if(st===3||end===3){

      e.target.value=E+" "

      //e.target.setSelectionRange(3,3)

    }else if(st===8||end===8){

      e.target.value=E+" "
  
    }
  }
    else{
      e.target.value=''
  }

  //删除设置
  if (e.keyCode === 8) {
    if(end===9){
      e.target.selectionEnd=8
      //e.target.setSelectionRange(8)
    }
    if(end===4){
      e.target.selectionEnd=3
    }
    //e.target.value=e.target.value.trim()
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
          修改手机号
        </NavBar>

        <WhiteSpace size='md' />

          <InputItem
          onFocus={this.onFocus}
          error={this.state.hasError}
          onErrorClick={this.onErrorClick}
          onKeyUp={this.onKeyUp}
          onChange={this.onChange}
          ref="nod"
          maxLength="13"
              {...getFieldProps('newNumber', {
                rules: [
                  { required: true }
                ]
              })}
              placeholder="修改手机号"
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
    changeNumber: (number) => {
      dispatch(updateNumber.updateNumber(number));
    }
  }
}

const ChangeUserNumberss = createForm()(ChangeUserNumber)
const ChangeUserNumbers=connect(null,mapDispatchToProps)(ChangeUserNumberss)
export default ChangeUserNumbers


