import { connect } from 'react-redux'

import Counter from 'components/Counter'
import module from './module'

const { actions, KEY } = module
const { increment, doubleAsync } = actions

const mapActionCreators = {
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter: state[KEY]
})

const CounterContainer = connect(mapStateToProps, mapActionCreators)(Counter)

export default CounterContainer
