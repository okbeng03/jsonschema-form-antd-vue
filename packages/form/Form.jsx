import _ from 'lodash'

import localize from '../validate/localize'
import { parseErrors, removeEmptyValue } from '../util/util'

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
    hideAction: {
      type: Boolean,
      default: false
    },
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
    defaultValue: [Object, Array]
  },
  data () {
    return {
      form: this.$form.createForm(this),
      formDefinition: {
        definition: []
      },
      model: {
        value: null
      }
    }
  },
  provide () {
    return {
      form: this.form,
      formDefinition: this.formDefinition,
      defaultValue: this.defaultValue,
      model: this.model
    }
  },
  created () {
    const { schema, definition, layout, labelCol, wrapperCol, colon, labelAlign } = this
    let formItemProps = {
      colon
    }

    if (layout !== 'vertical') {
      this.formItemProps = formItemProps = {
        ...formItemProps,
        labelCol,
        wrapperCol,
        labelAlign
      }
    }

    // form definition
    this.validate = this.$validator.compile(schema)
    this.formDefinition.definition = this.$generator.parse(schema, definition, formItemProps, this.handleFieldValidate.bind(this))

    this.$watch('schema', (schema) => {
      this.validate = this.$validator.compile(schema)
      this.formDefinition.definition = this.$generator.parse(schema, this.definition, this.formItemProps, this.handleFieldValidate.bind(this))
    }, {
      deep: true
    })

    this.$watch('definition', (definition) => {
      // this.validate = this.$validator.compile(this.schema)
      this.formDefinition.definition = this.$generator.parse(this.schema, definition, this.formItemProps, this.handleFieldValidate.bind(this))
    }, {
      deep: true
    })

    this.model.value = this.defaultValue

    this.$watch('defaultValue', (newValue) => {
      this.model.value = newValue
    }, {
      deep: true
    })
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
        if (!errors) {
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
    const { form, layout, prefixCls, hideRequiredMark, handleSubmit, hideReset, hideAction, labelCol, wrapperCol } = this
    const resetBtn = hideReset ? null : (
      <a-popconfirm
        title="确认重置？"
        onConfirm={ () => this.handleClear() }
      >
        <a-button type="danger" style="margin-left: 16px;">重置</a-button>
      </a-popconfirm>
    )
    const actionWrapperCol = layout !== 'vertical' ? {
      span: wrapperCol.span,
      offset: labelCol.span + labelCol.offset
    } : {}
    const action = hideAction ? null : (
      <a-form-item wrapperCol={ actionWrapperCol }>
        <a-button type="primary" html-type="submit">提交</a-button>
        { resetBtn }
      </a-form-item>
    )

    return (
      <a-form
        form={ form }
        layout={ layout }
        prefixCls={ prefixCls }
        hideRequiredMark={ hideRequiredMark }
        onSubmit={ handleSubmit }
      >
        <j-fieldset></j-fieldset>
        { action }
      </a-form>
    )
  }
}
