import React, { Component } from 'react';
import { NavBar, Icon, List, WhiteSpace, WingBlank} from 'antd-mobile';
import { hashHistory } from 'react-router';

import InstitutionInfo from '../../component/institution_info';

/**
 * @summary 我的机构
 */

class Institution extends Component{
state={
  insInfor:{}
}
  componentWillMount(){
      window.Fetch('/insInfo')
      .then(res=>{
        return res.json()
      }).then(data=>{
        this.setState({insInfor:data})
      })
  }

  render(){

    return this.props.children ||(
      <div>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => hashHistory.push({pathname: '/profile'})}
      >
        我的机构
      </NavBar>
      <InstitutionInfo ins={this.state.insInfor.institution} onClick={()=>console.log(999)}/>
      <WhiteSpace size='md' />
      <WingBlank>
      <span className="explain">我在该企业的信息</span>
      </WingBlank>
      <WhiteSpace size='md' />
      
        <List.Item extra={this.state.insInfor.username}
        onClick={this.changeName} 
        >
        用户名
        </List.Item>


        <List.Item extra={this.state.insInfor.number}
        onClick={this.changeNumber}
        >手机</List.Item>

        <List.Item extra={this.state.insInfor.department}
        onClick={this.unBind}
        >部门</List.Item>

        <List.Item extra={this.state.insInfor.usergroup}
        onClick={this.changePw}
        >用户组</List.Item>
  </div>
    )
  }
}

export default Institution

