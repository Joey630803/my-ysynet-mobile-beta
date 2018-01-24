import React, { Component } from 'react';
//import { submitUserName } from '../../utils';
import { hashHistory } from 'react-router';
import { createForm } from 'rc-form';
import {
  NavBar, 
  Icon, 
  WhiteSpace,
  Button,
  WingBlank,
  Toast
 } from 'antd-mobile';

import { connect } from 'react-redux';
import { updateNumber } from '../../action';

/*修改用户名*/
class ChangeUserNumber extends Component {

  state = {
    hasError: false,
    hasValue:false
    }

  onSubmit = (e) => {
    e.stopPropagation();
        let val=this.refs.node.value
        const pattern = /^1[3|4|5|7|8]\d{1}\s\d{4}\s\d{4}$/;

        // pattern.test(str);
        if(val!==''){
          if(val.match(pattern)){
            this.props.changeNumber(val)
            Toast.info('修改成功!')    
            
            }else{
                this.setState({
                  hasError: true
                });
                Toast.info('手机格式不对!')
                
            }
        }else{
          this.setState({
            hasError: true
          });
          Toast.info('还没填写哦!')    
        }
  }
componentDidMount(){
  this.refs.node.focus()
}

onFocus=()=>{
    if (this.state.hasError) {
      this.setState({hasError:false})
    }

}

onKeyUp=(e)=>{

  const mValue=e.target.value.replace(/\D/g,'');
  
  let inputValue
    if (mValue !==''){
      this.setState({hasValue:true})

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
}else{
  this.setState({hasValue:false})
}
inputValue?this.refs.node.value=inputValue:this.refs.node.value=null
}

errorClick=()=>{
  Toast.info('手机格式不对!')
}
backClick=(e)=>{
  console.log(this.refs.inputClear.className)
  //this.refs.inputClear.className='input-clear-avtive'
  //this.refs.inputClear.classnames.join('input-clear-avtive')
  //console.log(e.classname)
  this.refs.node.value=''
  this.setState({hasValue:false})
}
  render () {
    const block={
      display:'block'
    }
    const none={
      display:'none'
    }
    const red={
      color:'red'
    }
    const black={
      color:'black'
    }

    const errorDiv=this.state.hasError?
    <div className="input-error-extra" onClick={this.errorClick}></div>
    :null;
    const backDiv=this.state.hasValue?
    <div className='input-clear' ref="inputClear" style={this.state.hasError?none:block} onClick={this.backClick}></div>
    :null;

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

          <div className="list-item">
            <div className="list-line">
              <div className="input-control">

                <input
                onKeyUp={this.onKeyUp}
                onFocus={this.onFocus}
                style={this.state.hasError?red:black}
                ref="node"
                maxLength="13"
                placeholder="修改手机号"/>

              </div>
              {backDiv}
              {errorDiv}
            </div>
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
    changeNumber: (number) => {
      dispatch(updateNumber.updateNumber(number));
    }
  }
}

const ChangeUserNumberss = createForm()(ChangeUserNumber)
const ChangeUserNumbers=connect(null,mapDispatchToProps)(ChangeUserNumberss)
export default ChangeUserNumbers


