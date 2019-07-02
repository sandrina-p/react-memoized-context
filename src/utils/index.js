import displayName from 'react-display-name'

export function getDisplayName(prefix, Component) {
  return `${prefix}(${displayName(Component)})`
}

export function filterObject(object, filter) {
  if (!object || !filter) {
    return {}
  }

  return filter.reduce((result, key) => {
    return { ...result, [key]: object[key] }
  }, {})
}
