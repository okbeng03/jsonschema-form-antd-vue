import objectpath from 'objectpath'

export default function (name, schema, options, props) {
  const def = {
    key: options.path
  }
  const formItemProps = {
    ...props,
    label: schema.title || ''
  }

  if (schema.description) {
    formItemProps.help = schema.description
  }

  if (options.required) {
    formItemProps.required = true
  }

  if (options.col) {
    def.col = options.col
  }

  def.formItem = formItemProps
  options.lookup[objectpath.stringify(options.path)] = def

  return def
}
