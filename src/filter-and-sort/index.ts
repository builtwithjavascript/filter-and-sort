import { useFilter } from './useFilter'
import { useOrderBy } from './useOrderBy'
import { useFilterAndOrder } from './useFilterAndOrder'

export const useFilterAndSort = <T = void>() => {
  return {
    orderBy: useOrderBy<T>(),
    filter: useFilter<T>(),
    filterAndOrder: useFilterAndOrder<T>()
  }
}
