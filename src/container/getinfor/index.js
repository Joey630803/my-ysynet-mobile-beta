import React,{Component} from 'react'

const data={}
class GetInfor extends Component{
  componentDidMount(){
    fetch('/test').then(res=>res.json()).then(data=>console.log(data.data.name))
  }
  render(){
    return (
      <div>
        999999
      </div>
    )
  }
}

export default GetInfor