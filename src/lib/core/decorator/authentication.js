export const Authentication = (target, props) => {
  if (!target.authentication) {
    target.authentication = []
  }
  target.authentication.push(props)
}
