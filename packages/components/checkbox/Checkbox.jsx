import FormMixin from '../../mixins/form'

const Checkbox = {
  name: 'JCheckbox',
  mixins: [ FormMixin ],
  model: {
    prop: 'value',
    event: 'change.value'
  },
  props: {
    value: Boolean
  },
  // data () {
  //   const { $attrs, defaultValue } = this

  //   return {
  //     stateValue: defaultValue[$attrs.id] || false
  //   }
  // },
  render (h) {
    const { definition, value } = this
    // const props = {
    //   attrs: {
    //     checked: stateValue
    //   }
    // }

    return (
      <a-checkbox { ...this.$props } onChange={ this.onChange } checked={ value }>{ definition.formItem.label }</a-checkbox>
    )
  },
  methods: {
    onChange (e) {
      // this.stateValue = e.target.checked
      this.$emit('change', e.target.checked)
    }
  }
}

export default Checkbox
