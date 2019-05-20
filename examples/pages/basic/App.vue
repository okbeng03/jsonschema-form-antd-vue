<template>
  <div class="container">
    <vue-form :form="form" :schema="schema" :definition="definition" :layout="'vertical'" :default-value="model"></vue-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: this.$form.createForm(this),
      schema: {
        title: 'basic',
        type: 'object',
        properties: {
          name: {
            type: 'string',
            title: '姓名'
          },
          phone: {
            type: 'string',
            title: '手机',
            pattern: '^1[3578]\\d{9}$',
            description: '请输入正确的手机号码'
          },
          hobby: {
            title: '爱好',
            type: 'array',
            items: {
              type: 'string',
              title: '爱好',
              enum: ['乒乓球', '足球', '篮球']
            }
          },
          contacts: {
            type: 'array',
            title: '通讯录',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  title: '姓名'
                },
                phone: {
                  type: 'string',
                  title: '手机',
                  pattern: '^1[3578]\\d{9}$',
                  description: '请输入正确的手机号码'
                },
                sex: {
                  type: 'string',
                  title: '性别',
                  enums: ['1', '2']
                }
              },
              required: ['name', 'phone']
            }
          },
          job: {
            type: 'string',
            title: '职业',
            enums: ['IT', 'Teacher', 'Doctor']
          },
          agree: {
            type: 'boolean',
            title: '同意协议'
          }
        },
        required: ['name', 'phone', 'hobby', 'contacts', 'agree']
      },
      definition: [
        'name',
        'phone',
        'hobby',
        'contacts',
        {
          key: 'agree',
          type: 'a-radio'
        },
        {
          key: 'job',
          type: 'a-radio'
        }
      ],
      model: {
        name: '王昌彬',
        contacts: [
          {
            name: '王瑶',
            phone: '15268801392',
            sex: '2'
          }
        ],
        agree: true,
        job: 'Teacher'
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 40px auto;
  width: 1300px;
}
</style>
