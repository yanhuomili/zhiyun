import { headerLogisticsTraceMap } from '@/router'
const headerLogisticsTrace = {
  state: {
    headerLogisticsTraceMap: headerLogisticsTraceMap
  },
  mutations: {
    SET_LOGISTICS_TRACE_HEADER: (state, data) => {
      state.headerLogisticsTraceMap = data
    }
  },
  actions: {
  }
}

export default headerLogisticsTrace
