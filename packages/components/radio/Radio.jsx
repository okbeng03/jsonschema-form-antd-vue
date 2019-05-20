import FormMixin from '../../mixins/form'

const Radio = {
  name: 'JRadio',
  mixins: [ FormMixin ],
  data () {
    const { $attrs, defaultValue } = this

    return {
      stateValue: defaultValue[$attrs.id] || false
    }
  },
  render (h) {
    const { definition, stateValue } = this
    const { options } = definition.input || {}

    if (options && options.length) {
      return (
        <a-radio-group options={ options } onChange={ this.onChange } value={ stateValue } />
      )
    } else {
      const props = {
        attrs: {
          checked: stateValue
        }
      }

      return (
        <a-radio { ...this.$props } onChange={ this.onChange } { ...props }>{ definition.formItem.label }</a-radio>
      )
    }
  },
  methods: {
    onChange (e) {
      const target = e.target
      const value = target.value || target.checked
      this.stateValue = value
      this.$emit('change', value)
    }
  }
}

export default Radio
