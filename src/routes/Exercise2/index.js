import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'exercise2',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Exercise2 = require('./containers/Exercise2Container').default
      const reducer = require('./modules/Exercise2').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'exercise2', reducer })

      /*  Return getComponent   */
      cb(null, Exercise2)

    /* Webpack named bundle   */
    }, 'exercise2')
  }
})
