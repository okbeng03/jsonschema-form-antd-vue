import _ from 'lodash'
import { getDefinition } from '../util/get'

export default {
  props: {
    // form: Object,
    path: {
      type: Array,
      default: () => {
        return []
      }
    }
    // fileds: Object,
    // definition: Object
  },
  data () {
    return {
      // fields: {},
      // definition: {},
      // form: this.iForm,
      // formDefinition: this.iFormDefinition
      // model: {}
    }
  },
  computed: {
    form () {
      return this.iForm
    },
    definition () {
      const { path, formDefinition } = this
      // console.log(this.formSymbol, this.defintionSymbol)
      return getDefinition(path, formDefinition.definition)
    }
  },
  inject: {
    form: {
      default: () => ({})
    },
    // formFields: { default: () => ({}) },
    formDefinition: {
      from: 'formDefinition',
      default: () => ({})
    }
    // model: { default: () => noop }
  },
  // [
  //   'form',
  //   'formDefinition',
  //   'a'
  // ],
  // created () {
  //   const { name, formDefinition } = this
  //   console.log(name, formDefinition, this.form)
  //   // console.log(this.formSymbol, this.defintionSymbol)
  //   // this.fields = getFields(name, formFields)
  //   this.definition = getDefinition(name, formDefinition)
  //   console.log(1111, this.definition)
  // },
  methods: {
    // handleFieldValidate (rule, value, callback) {
    //   validate('form', this.form.getFieldsValue(), rule.fullField).then(({ valid, errors }) => {
    //     if (valid) {
    //       callback()
    //     } else {
    //       callback(errors[0].message)
    //     }
    //   })
    // }
    getPath (key) {
      const { path } = this
      return key.map((item, idx) => {
        return path[idx] || item
      })
    },
    getDecoratorId (key) {
      const id = this.getPath(key).join('.')

      return id.replace(/\.(\d+)\./g, '[$1].')
    }
  }
}
