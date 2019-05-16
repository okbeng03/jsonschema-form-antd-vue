import _ from 'lodash'
import Generator from '../../core/schema'

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
          span: 5,
          offset: 0
        }
      }
    },
    wrapperCol: {
      type: Object,
      default () {
        return {
          span: 19,
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
      // model: {},
      // fields: {},
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
      // model: this.value,
      // formFields: this.fields
    }
  },
  // model: {
  //   prop: 'value',
  //   event: 'change'
  // },
  created () {
    const { schema, definition } = this

    // if (!_.isEmpty(value)) {
    //   this.model = value
    // }

    // form definition
    this.generator = new Generator()
    // this.formDefinition = this.generator.parse(schema, definition)
    this.formDefinition.definition = [
      {
        type: 'a-input',
        key: ['name'],
        group: {
          label: '姓名',
          required: true
        },
        decorator: [
          // 'name',
          {
            // initialValue: '王昌彬',
            rules: [{ required: true, message: 'Please input your name!' }]
          }
        ]
      },
      {
        type: 'a-input',
        key: ['phone'],
        group: {
          label: '手机'
        },
        input: {
          type: 'number'
        },
        decorator: [
          // 'phone',
          {
            rules: [{ required: true, message: 'Please input your phone!' }]
          }
        ]
      },
      {
        type: 'j-list',
        key: ['contacts'],
        label: '通讯录',
        columns: [
          {
            col: 8,
            label: '姓名',
            required: true
          },
          {
            col: 8,
            label: '联系方式',
            required: true
          },
          {
            col: 8,
            label: '性别'
          }
        ],
        items: [
          {
            type: 'j-inline',
            key: ['contacts', '0'],
            items: [
              {
                type: 'a-input',
                key: ['contacts', '0', 'name'],
                col: 8,
                group: {
                  label: '',
                  required: true
                },
                decorator: [
                  // 'contacts.0.name',
                  {
                    rules: [{ required: true, message: 'Please input your name!' }]
                  }
                ]
              },
              {
                type: 'a-input',
                key: ['contacts', '0', 'phone'],
                col: 8,
                group: {
                  label: '',
                  required: true
                },
                decorator: [
                  // 'contacts.0.name',
                  {
                    rules: [{ required: true, message: 'Please input your phone!' }]
                  }
                ]
              },
              {
                type: 'a-input',
                key: ['contacts', '0', 'sex'],
                col: 8,
                group: {
                  label: ''
                },
                decorator: [
                  // 'contacts.0.name',
                  // {
                  //   rules: [{ required: true, message: 'Please input your sex!' }]
                  // }
                ]
              }
            ]
          }
        ]
      }
    ]

    // console.log(this.formDefinition)
    // this.form = this.$form.createForm(this, {
    //   name: 'global_state',
    //   mapPropsToFields(props) {
    //     return {
    //       name: Form.createFormField({})
    //     }
    //   },
    // })
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
        }
      })
    }
  },
  render (h) {
    const { form, layout, prefixCls, hideRequiredMark, handleSubmit } = this

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
        </a-form-item>
      </a-form>
    )
  }
}
