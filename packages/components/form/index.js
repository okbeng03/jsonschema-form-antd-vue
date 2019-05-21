import { Form, Input, InputNumber, Switch, Select, Checkbox, Button, Row, Col, Icon, Popconfirm } from 'ant-design-vue'
import Generator from '../../core/schema'
import validator from '../../validate'
import JForm from './Form'

/* istanbul ignore next */
JForm.install = function (Vue) {
  Vue.prototype.$generator = new Generator()
  Vue.prototype.$validator = validator()

  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Form)
  Vue.use(Input)
  Vue.use(InputNumber)
  Vue.use(Switch)
  Vue.use(Select)
  Vue.use(Checkbox)
  Vue.use(Button)
  Vue.use(Icon)
  Vue.use(Popconfirm)

  Vue.component(JForm.name, JForm)
}

export default JForm
