import Form from './form'
import Fieldset from './fieldset'
import List from './array'
import Inline from './inline'
import Control from './control'
import Checkbox from './checkbox'
import Radio from './radio'
import DateTimePicker from './datetime'
import Html from './html'

const components = [
  Form,
  Fieldset,
  List,
  Inline,
  Control,
  Checkbox,
  Radio,
  DateTimePicker,
  Html
]

const install = function (Vue) {
  components.map(component => {
    Vue.use(component)
  })
}

export {
  Form,
  Fieldset,
  List,
  Inline,
  Control,
  Checkbox,
  Radio,
  DateTimePicker,
  Html
}

export default {
  install
}
