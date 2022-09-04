import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { rootAction } from '@/store/action'

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(rootAction, dispatch)
}
