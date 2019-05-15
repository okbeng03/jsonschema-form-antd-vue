import Vue from 'vue'
import { Form, Input, Button, Row, Col } from 'ant-design-vue'
import JForm from './Form'
import Fieldset from '../fieldset'
import List from '../array'
import Inline from '../inline'
import Control from '../control'
// import ref from 'vue-ref'

Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)
Vue.use(Fieldset)
Vue.use(List)
Vue.use(Control)
Vue.use(Inline)
// Vue.use(ref, { name: 'ant-ref' })
// Vue.prototype.$form = Form

// export { FormProps, FormCreateOption, ValidationRule } from './Form'
// export { FormItemProps } from './FormItem'

/* istanbul ignore next */
JForm.install = function (Vue) {
  Vue.component(JForm.name, JForm)
  // Vue.component(Form.Item.name, Form.Item)
  // Vue.prototype.$form = Form
}

export default JForm
