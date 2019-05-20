import _ from 'lodash'
import validator from '../../validate'
import localize from '../../validate/localize'
import { parseErrors, removeEmptyValue } from '../../util/util'

export default {
  name: 'VueForm',
  props: {
    layout: {
      type: String,
      validator: function (value) {
        return ['horizontal', 'inline', 'vertical'].indexOf(value) !== -1
      }
    },
    // form: Object,
    prefixCls: String,
    hideRequiredMark: Boolean,
    hideReset: {
      type: Boolean,
      default: true
    },
    labelCol: {
      type: Object,
      default () {
        return {
          span: 4,
          offset: 0
        }
      }
    },
    labelAlign: {
      type: String,
      default: 'right'
    },
    wrapperCol: {
      type: Object,
      default () {
        return {
          span: 20,
          offset: 0
        }
      }
    },
    colon: {
      type: Boolean,
      default: true
    },
    schema: Object,
    definition: Array,
    defaultValue: [Object, Array],
    ajv: {
      type: Object,
      default: () => {
        return validator()
      }
    }
  },
  data () {
    return {
      form: this.$form.createForm(this),
      formDefinition: {
        definition: []
      }
    }
  },
  provide () {
    return {
      form: this.form,
      formDefinition: this.formDefinition,
      defaultValue: this.defaultValue
    }
  },
  created () {
    const { schema, definition, ajv, layout, labelCol, wrapperCol, colon, labelAlign } = this
    let formItemProps = {
      colon
    }

    if (layout !== 'vertical') {
      formItemProps = {
        ...formItemProps,
        labelCol,
        wrapperCol,
        labelAlign
      }
    }

    // form definition
    this.validate = ajv.compile(schema)
    // this.formDefinition =
    const a = this.$generator.parse(schema, definition, formItemProps, this.handleFieldValidate.bind(this))
    console.log(JSON.stringify(a), a)
    this.formDefinition.definition = a
  },
  mounted () {
    const { defaultValue } = this

    if (!_.isEmpty(defaultValue)) {
      this.form.setFieldsValue(defaultValue)
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()

      this.form.validateFields((errors, values) => {
        console.log(errors)
        if (!errors) {
          console.log(values)
          this.$emit('submit', values)
        }
      })
    },
    handleFieldValidate (rule, value, callback) {
      const { validate, form, schema } = this
      const path = rule.fullField
      const model = form.getFieldsValue()
      // 移除空数据
      removeEmptyValue(model)

      const valid = validate(model)
      let error

      if (!valid) {
        localize(validate.errors, schema)
        const allErrors = parseErrors(validate.errors)

        if (allErrors[path]) {
          error = allErrors[path]
        }

        callback(error)
      } else {
        callback()
      }
    },
    handleClear () {
      this.form.resetFields()
    }
  },
  render (h) {
    const { form, layout, prefixCls, hideRequiredMark, handleSubmit, hideReset } = this
    const resetBtn = hideReset ? null : (
      <a-popconfirm
          title="确认重置？"
          onConfirm={ () => this.handleClear() }>
        <a-button type="danger" style="margin-left: 16px;">重置</a-button>
      </a-popconfirm>
    )

    return (
      <a-form
        form={ form }
        layout={ layout }
        prefixCls={ prefixCls }
        hideRequiredMark={ hideRequiredMark }
        onSubmit={ handleSubmit }
      >
        <j-fieldset>
        </j-fieldset>
        <a-form-item>
          <a-button type="primary" html-type="submit">提交</a-button>
          { resetBtn }
        </a-form-item>
      </a-form>
    )
  }
}
