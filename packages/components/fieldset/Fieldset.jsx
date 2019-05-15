// import _ from 'lodash'
import FormMixin from '../../mixins/form'

const Fieldset = {
  name: 'JFieldset',
  mixins: [ FormMixin ],
  render (h) {
    return (
      <div>
        { this.renderItems(h) }
      </div>
    )
  },
  methods: {
    renderItems (h) {
      const { definition } = this
      // const children = []
      // let item
      // let newName

      // for (let i = 0; i < definition.length; i++) {
      //   item = definition[i]
      //   newName = item.key

      //   children.push(
      //     this.renderItem(h, newName, item)
      //   )
      // }

      return (definition.items || definition).map(item => {
        return (
          <j-control path={ this.getPath(item.key) }></j-control>
        )
      })

      // return children
    }
    // renderItem (h, name, definition) {
    //   const component = definition.type
    //   const groupProps = {
    //     props: definition.group
    //   }
    //   const inputProps = {
    //     props: definition.input
    //   }

    //   if (definition.decorator) {
    //     inputProps.directives = [
    //       {
    //         name: 'decorator',
    //         value: definition.decorator
    //       }
    //     ]
    //   }

    //   return (
    //     <a-form-item { ...groupProps }>
    //       <component path={ name } { ...inputProps }></component>
    //     </a-form-item>
    //   )
    // }
  }
}

export default Fieldset
