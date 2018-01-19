import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
/**
 * @summary 用户信息组件
 */
class UserInfo extends Component {
  render () {
    const { user, onClick } = this.props;
    //console.log(user)
    return (
      <section className={'ysynet-profile'} onClick={onClick}>
        <img alt='用户头像' src={user.avatar}/>
        <div className={'ysynet-profile-detail'}>
          <p className={'name'}> { user.username } </p>

          <p className={'phone'}><i></i><span>{user.number}</span></p>

        </div>
        <span className={'next'}></span>
      </section>
    )
  }
}

UserInfo.propTypes = {
  //data: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export default UserInfo;