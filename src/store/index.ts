import { createStore } from 'vuex'

interface IRootStore {
  current: number
}
const store = createStore<IRootStore>({
  state() {
    return {
      current: 0
    }
  }
})

export default store
