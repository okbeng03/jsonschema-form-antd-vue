import classNames from 'classnames'
import FormMixin from '../../mixins/form'
import './css/index.scss'

const List = {
  name: 'JList',
  mixins: [ FormMixin ],
  render (h) {
    const { definition } = this
    const classes = classNames('j-list', {
      'j-list-inline': definition.columns
    })

    return (
      <div class={ classes }>
        { this.renderHeader(h) }
        { this.renderItems(h) }
      </div>
    )
  },
  methods: {
    renderHeader (h) {
      const { columns } = this.definition

      if (columns) {
        const cols = columns.map(column => {
          const classes = classNames({
            'ant-form-item-required': column.required
          })

          return (
            <a-col span={ column.col }>
              <label class={ classes }>{ column.label }</label>
            </a-col>
          )
        })

        return (
          <a-row>
            { cols }
          </a-row>
        )
      } else {
        return null
      }
    },
    renderItems (h) {
      const { path } = this
      const list = [0, 1, 2]

      return list.map(idx => {
        const newPath = path.concat([idx])

        return (
          <j-control path={ this.getPath(newPath) }></j-control>
        )
      })
    }
  }
}

export default List
