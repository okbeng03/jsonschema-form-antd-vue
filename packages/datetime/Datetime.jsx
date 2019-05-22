import moment from 'moment'
import FormMixin from '../mixins'

const DateTimePicker = {
  name: 'JDateTimePicker',
  mixins: [ FormMixin ],
  model: {
    prop: 'value',
    event: 'change.value'
  },
  props: {
    value: [ String, Object ]
  },
  computed: {
    format () {
      return this.definition.input.format
    }
  },
  data () {
    const { value } = this.$props
    return {
      stateValue: value ? moment(value, this.format) : null
    }
  },
  watch: {
    value (val) {
      this.stateValue = val ? moment(val, this.format) : null
    }
  },
  render (h) {
    const { definition, stateValue } = this
    const { type } = definition.input
    const inputProps = {
      props: definition.input
    }

    if (type === 'time') {
      return <a-time-picker { ...inputProps } value={ stateValue } onChange={ this.onChange } />
    } else {
      if (type === 'date-time') {
        inputProps.props.showTime = true
      }

      return <a-date-picker { ...inputProps } value={ stateValue } onChange={ this.onChange } />
    }
  },
  methods: {
    onChange (time, timeString) {
      const value = timeString || time.format(this.format)
      this.$emit('change', value)
    }
  }
}

export default DateTimePicker
