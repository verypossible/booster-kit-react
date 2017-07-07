import { connect } from 'react-redux'

import Counter from 'components/Counter'
import { actions, KEY } from './module'

const { increment, doubleAsync } = actions

const mapActionCreators = {
  doubleAsync,
  increment: () => increment(1)
}

const mapStateToProps = (state: S) => ({
  counter: state[KEY]
})

const CounterContainer = connect(mapStateToProps, mapActionCreators)(Counter)

export default CounterContainer
