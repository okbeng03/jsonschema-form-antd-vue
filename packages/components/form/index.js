import { Form, Input, InputNumber, Switch, Select, Checkbox, Button, Row, Col, Icon } from 'ant-design-vue'
import Generator from '../../core/schema'
import JForm from './Form'
import Fieldset from '../fieldset'
import List from '../array'
import Inline from '../inline'
import Control from '../control'
import JCheckbox from '../checkbox'

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
  Vue.use(Fieldset)
  Vue.use(List)
  Vue.use(Control)
  Vue.use(Inline)
  Vue.use(JCheckbox)

  Vue.component(JForm.name, JForm)
}

export default JForm
