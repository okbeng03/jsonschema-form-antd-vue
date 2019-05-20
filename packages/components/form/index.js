import { Form, Input, InputNumber, Switch, Select, Checkbox, Button, Row, Col, Icon, Popconfirm } from 'ant-design-vue'
import Generator from '../../core/schema'
import JForm from './Form'
import Fieldset from '../fieldset'
import List from '../array'
import Inline from '../inline'
import Control from '../control'
import JCheckbox from '../checkbox'
import JRadio from '../radio'
import DateTimePicker from '../datetime'
import Html from '../html'

/* istanbul ignore next */
JForm.install = function (Vue) {
  Vue.prototype.$generator = new Generator()

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
  Vue.use(Fieldset)
  Vue.use(List)
  Vue.use(Control)
  Vue.use(Inline)
  Vue.use(JCheckbox)
  Vue.use(JRadio)
  Vue.use(DateTimePicker)
  Vue.use(Html)

  Vue.component(JForm.name, JForm)
}

export default JForm
