import styled from 'styled-components'

const Icon = ({ icon: Icon, ...props }) => (
  <Icon {...props} />
)

export default styled(Icon)`
  width: 2em;
`
