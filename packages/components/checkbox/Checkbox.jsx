import FormMixin from '../../mixins/form'

const Checkbox = {
  name: 'JCheckbox',
  mixins: [ FormMixin ],
  data () {
    const { $attrs, defaultValue } = this

    return {
      stateValue: defaultValue[$attrs.id] || false
    }
  },
  render (h) {
    const { definition, stateValue } = this
    const props = {
      attrs: {
        checked: stateValue
      }
    }

    return (
      <a-checkbox { ...this.$props } onChange={ this.onChange } { ...props }>{ definition.formItem.label }</a-checkbox>
    )
  },
  methods: {
    onChange (e) {
      this.stateValue = e.target.checked
      this.$emit('change', e.target.checked)
    }
  }
}

export default Checkbox
