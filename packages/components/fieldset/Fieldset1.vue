<template>
  <div>
    <a-form-item v-for="group in definition" :key="group.key" :label="group.group.label">
      <a-input v-decorator="group.decorator"></a-input>
    </a-form-item>
  </div>
</template>

<script>
import FormMixin from '../../mixins/form'

export default {
  name: 'JFieldset',
  mixins: [ FormMixin ]
}
</script>

