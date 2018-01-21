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
        let val=this.refs.node.value
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

  // const pattern = /^1[3|4|5|7|8]\d{1}\s\d{4}\s\d{4}$/;
  // pattern.test(str);


onKeyUp=(e)=>{

  const mValue=e.target.value.replace(/\D/g,'');
  
  let inputValue
    if (mValue !==''){

    let mLength = mValue.length;
    if(mLength<=3){
      inputValue=mValue
    }else{
      if (mLength <= 7) {
        inputValue=mValue.substring(0, 3) + ' ' + mValue.substring(3, mLength)
      } else {
        inputValue=mValue.substring(0, 3) + ' ' + mValue.substring(3, 7) + ' ' + mValue.substring(7, 11)
      }
  }
}
inputValue?this.refs.node.value=inputValue:this.refs.node.value=null
}

// onKeyUp=(e)=>{
//   // if(e.target.value.match(/（[^\d]|[^\s]）/)){
//   //   console.log('您输入的是非数字！')
//   //  }
// e.target.value=e.target.value.replace(/\D[^\s]/g,'')
  
//   const E=e.target.value.trim()
//   let end = e.target.selectionEnd
//   let st = e.target.selectionStart
//   //const node = this.refs.nod

//   if(E!==''){
//     if(st===3||end===3){

//       e.target.value=E+' '

//       //e.target.setSelectionRange(3,3)

//     }else if(st===8||end===8){

//       e.target.value=E+' '
  
//     }
//   }
//     else{
//       e.target.value=''
//   }

//   //删除设置
//   if (e.keyCode === 8) {
//     if(end===9){
//       e.target.selectionEnd=8
//       //e.target.setSelectionRange(8)
//     }
//     // if(st===9){
//     //   e.target.selectionStart=8
//     // }
//     if(end===4){
//       e.target.selectionEnd=3
//       //e.target.selectionStart=3
//     }
//     // if(st===4){
//     //   e.target.selectionStart=3
//     // }
//     //e.target.value=e.target.value.trim()
//   }
// }
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
          {/* <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="186 1234 1234"
          >手机号码</InputItem> */}
          <input
          onKeyUp={this.onKeyUp}
          ref="node"
          maxLength="13"
          placeholder="修改手机号"
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


