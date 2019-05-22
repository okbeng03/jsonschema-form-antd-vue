import FormMixin from '../mixins'

export default {
  name: 'j-html',
  mixins: [ FormMixin ],
  render (h) {
    const { html } = this.definition.input

    return (
      <div domPropsInnerHTML={ html }></div>
    )
  }
}
