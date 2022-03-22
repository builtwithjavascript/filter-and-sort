import { useFilter } from './useFilter'
import { useSort } from './useSort'
import { useCombined } from './useCombined'

export const useFilterAndSort = <T = void>() => {
  return {
    filter: useFilter<T>(),
    sort: useSort<T>(),
    filterAndSort: useCombined<T>()
  }
}
