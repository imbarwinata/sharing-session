const toSlug = (str) => {
  return str.toLowerCase()
  .replace(/ /g, '-')
  .replace(/[^\w-]+/g, '')
}

exports.toSlug = toSlug
