<template>
  <div class="container">
    <vue-form :form="form" :schema="schema" :layout="'vertical'" :default-value="model"></vue-form>
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
          }
        },
        required: ['name', 'phone', 'hobby', 'contacts']
      },
      model: {
        name: '王昌彬',
        contacts: [
          {
            name: '王瑶',
            phone: '1233456771',
            sex: '2'
          }
        ]
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
