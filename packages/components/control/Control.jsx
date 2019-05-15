import FormMixin from '../../mixins/form'

const Control = {
  name: 'JControl',
  mixins: [ FormMixin ],
  render (h) {
    const { path, definition } = this
    const component = definition.type
    const groupProps = {
      props: definition.group
    }
    const inputProps = {
      props: definition.input
    }
    const name = this.getPath(path)

    if (definition.decorator) {
      const id = this.getDecoratorId(path)
      const decorator = [id].concat(definition.decorator)
      inputProps.directives = [
        {
          name: 'decorator',
          value: decorator
        }
      ]

      return (
        <a-form-item { ...groupProps }>
          <component path={ name } { ...inputProps }></component>
        </a-form-item>
      )
    } else {
      return <component path={ name } { ...inputProps }></component>
    }
  }
}

export default Control
