import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'exercise1',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Exercise1 = require('./containers/Exercise1Container').default
      const reducer = require('./modules/exercise1').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'exercise1', reducer })

      /*  Return getComponent   */
      cb(null, Exercise1)

    /* Webpack named bundle   */
    }, 'exercise1')
  }
})
