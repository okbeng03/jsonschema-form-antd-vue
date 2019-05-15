import Form from './form'
import Fieldset from './fieldset'
import List from './array'

const components = [
  Form,
  Fieldset,
  List
]

const install = function (Vue) {
  components.map(component => {
    Vue.use(component)
  })
}

export {
  Form,
  Fieldset,
  List
}

export default {
  install
}
