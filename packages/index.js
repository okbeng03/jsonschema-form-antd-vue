import Form from './components/form'
import Fieldset from './components/fieldset'
import List from './components/array'
import Inline from './components/inline'
import Control from './components/control'
import Checkbox from './components/checkbox'
import Radio from './components/radio'
import DateTimePicker from './components/datetime'
import Html from './components/html'

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
