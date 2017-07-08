import * as React from 'react'

interface CounterLayoutProps {
  children: React.SFC<any>
}

const CounterLayout: React.SFC<CounterLayoutProps> = ({
  children
}) => (
  <section>
    {children}
  </section>
)

export default CounterLayout
