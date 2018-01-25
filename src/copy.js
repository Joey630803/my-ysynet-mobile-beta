import React, {PropTypes} from 'react'
import {
  Form,
  Input,
  Icon
} from 'antd'

const FormItem = Form.Item

const Span = React.createClass({

  inputRef: undefined,

  propTypes: {
    fieldKey: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    pattern: PropTypes.object,
    form: PropTypes.object.isRequired
  },

  getInitialState() {
    return {}
  },

  componentDidMount() {
    this.setState({value: this.props.value || '', editing: false})
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editing && !prevState.editing) {
      const input = this.inputRef.refs.input
      input.focus()
      input.setSelectionRange(0, input.value.length);
    }
  },

  startEdit() {
    this.setState({...this.state, editing: true})
  },

  endEdit() {
    this.props.form.validateFields([this.props.fieldKey], (errors, values) => {
      if (errors) return
      const value = values[this.props.fieldKey]
      this.setState({value, editing: false})
    })
  },

  render() {
    const k = this.props.fieldKey
    const message = '请输入' + this.props.label
    return (
      <span>
        <span style={{display: this.state.editing ? 'none' : '', background: '#eeeeff'}} onClick={this.startEdit}>
          {this.state.value || '未设定'}
        </span>
        <span style={{display: !this.state.editing ? 'none' : ''}}>
          <FormItem style={{marginBottom: 0}}>{
            this.props.form.getFieldDecorator(k, {
              initialValue: this.state.value,
              rules: [{required: this.props.required, message, pattern: this.props.pattern}]
            })(<Input size="default" placeholder={message} ref={c => this.inputRef = c}
                      addonAfter={<span onClick={this.endEdit}><Icon type="check"/></span>}
                      onPressEnter={this.endEdit}/>)
          }
          </FormItem>
        </span>
      </span>
    )
  }

})

export default Span
