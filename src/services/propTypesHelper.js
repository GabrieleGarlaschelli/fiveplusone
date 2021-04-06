function required(props, propName, componentName) {
  if (props[propName] == undefined || props[propName] == null) {
    throw new Error(propName + ' required')
  }
}

function requiredAndOfValues(props, propName, componentName, values) {
  if (props[propName] == undefined || props[propName] == null) {
    throw new Error(propName + ' required')
  } else if (!values.include(props[propName])) {
    throw new Error(propName + ' must be on of ' + values)
  }
}

module.exports = {
  required: required,
  requiredAndOfValues: requiredAndOfValues
}