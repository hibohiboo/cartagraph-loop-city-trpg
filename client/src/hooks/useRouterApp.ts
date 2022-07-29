import { useAppSelector } from '@/store/hooks'
import { isUserAuthenticatedSelector } from '@/store/selectors/auth'

const useRouterApp = () => {
  const authenticated = useAppSelector(isUserAuthenticatedSelector)

  return { authenticated }
}

export default useRouterApp
