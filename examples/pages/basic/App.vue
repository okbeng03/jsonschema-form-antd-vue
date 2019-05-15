<template>
  <div class="container">
    <vue-form :form="form" :schema="schema"></vue-form>
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
          }
        },
        required: ['name', 'phone']
      },
      model: {
        name: '王昌彬'
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
