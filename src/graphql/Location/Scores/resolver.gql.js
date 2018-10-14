export default {
  Score: {
    attributes: ({ attributes }) => {
      const attrKeys = Object.keys(attributes)
      return attrKeys.reduce(
        (attr, key) => [
          ...attr,
          {
            ...attributes[key],
            type: key
          }
        ],
        []
      )
    },
    links: ({ links }) =>
      Object.keys(links).reduce(
        (link, key) =>
          link.concat({
            id: key,
            paths: [links[key]]
          }),
        []
      )
  }
}
