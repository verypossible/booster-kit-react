import * as React from 'react'

import { Icon, Span } from 'atoms'

const FormError = ({ error }) => <Span><Icon status='warning' icon='AlertCircle' />{error}</Span>

export default FormError
