import _ from 'lodash'
import { getDefinition } from '../util/get'

export default {
  props: {
    path: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    form () {
      return this.iForm
    },
    definition () {
      const { path, formDefinition } = this
      return getDefinition(path, formDefinition.definition)
    }
  },
  inject: {
    form: {
      default: () => ({})
    },
    formDefinition: {
      from: 'formDefinition',
      default: () => ({})
    },
    defaultValue: {
      default: () => ({})
    }
  },
  methods: {
    getFieldDefaultValue (key) {
      if (!key) {
        return
      }

      return _.get(this.defaultValue, key)
    },
    getPath (key) {
      if (!key) {
        return
      }

      const { path } = this
      return key.map((item, idx) => {
        return path[idx] || item
      })
    },
    getDecoratorId (key) {
      if (!key) {
        return
      }

      const id = this.getPath(key).join('.')

      return id.replace(/\.(\d+)\./g, '[$1].')
    }
  }
}
