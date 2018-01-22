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
    hasValue:[false,false,false],
    pw:null
    }

  onSubmit = (e) => {
    e.stopPropagation();
        let val=this.refs.node.value
        //const pattern = /^[a-zA-Z0-9]{6,10}$/;
        const pattern =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        
        if(val!==''){
          if(val.match(pattern)){

            this.setState({pw:val})
            Toast.info('修改成功!')
            
            }else{
                this.setState({
                  hasError: true
                });
                Toast.info('密码必须是6-16位之间，数字和字母的组合!')
            }
        }else{
          this.setState({
            hasError: true
          });
          Toast.info('还没填写哦!')    
        }
  }

onFocus=()=>{
    if (this.state.hasError) {
      this.setState({hasError:false})
    }

}

onKeyUp=(e)=>{
const key=e.target.dataset.index

  const mValue=e.target.value.replace(/\s/g,'');
  
    if (mValue!==''){
      
      let hasValue=this.state.hasValue
      
      if(key==='0'){
        
        hasValue[0]=true
        this.setState({hasValue})
      } 
      if(key==='1'){
        hasValue[1]=true
        this.setState({hasValue})
      } 
      if(key==='2'){
        hasValue[2]=true
        this.setState({hasValue})
      } 
    }
    e.target.value=mValue
}
errorClick=()=>{
  Toast.info('手机格式不对!')
}
backClick=(e)=>{
  const key=e.target.dataset.index
  let hasValue=this.state.hasValue
  
  if(key==='0'){
    this.refs.old.value=''
    hasValue[0]=false
    this.setState({hasValue})
  }else if(key==='1'){
    this.refs.new.value=''
    hasValue[1]=false
    this.setState({hasValue})
  }else{
    this.refs.node.value=''
    hasValue[2]=false
    this.setState({hasValue})
  }
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

    const backDiv0=this.state.hasValue[0]?
    <div className="input-clear" style={this.state.hasError?none:block} onClick={this.backClick} data-index={0}></div>
    :null;

    const backDiv1=this.state.hasValue[1]?
    <div className="input-clear" style={this.state.hasError?none:block} onClick={this.backClick} data-index={1}></div>
    :null; 

    const backDiv2=this.state.hasValue[2]?
    <div className="input-clear" style={this.state.hasError?none:block} onClick={this.backClick} data-index={2}></div>
    :null;

    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => hashHistory.push({pathname: '/profile/user'})}
        >
        修改密码
        </NavBar>

        <WhiteSpace size='md' />

          <div className="list-item">
            <div className="list-line">
              <div className="input-control">

                <input
                type="password"
                data-index={0}
                onKeyUp={this.onKeyUp}
                onFocus={this.onFocus}
                style={this.state.hasError?red:black}
                maxLength="16"
                autoFocus="autoFocus"
                ref="old"
                placeholder="旧密码"/>

              </div>
              {backDiv0}
              
              {errorDiv}
            </div>
          </div>

          <WhiteSpace size='md' />

          <div className="list-item">
            <div className="list-line">
              <div className="input-control">

                <input
                type="password"
                data-index={1}
                
                onKeyUp={this.onKeyUp}
                onFocus={this.onFocus}
                style={this.state.hasError?red:black}
                maxLength="16"
                autoFocus="autoFocus"
                ref="new"
                placeholder="新密码"/>

              </div>
              {backDiv1}
              {errorDiv}
            </div>
          </div>

        <WhiteSpace size='md' />

          <div className="list-item">
            <div className="list-line">
              <div className="input-control">

                <input
                type="password"
                data-index={2}
                
                onKeyUp={this.onKeyUp}
                onFocus={this.onFocus}
                style={this.state.hasError?red:black}
                maxLength="16"
                autoFocus="autoFocus"
                ref="node"
                placeholder="确认新密码"/>

              </div>
              {backDiv2}
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


