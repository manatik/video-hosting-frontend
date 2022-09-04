import { configureStore } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist/lib/constants'
import storage from 'redux-persist/lib/storage'

import { api } from '@/store/api/api'
import { rtkQueryErrorLogger } from '@/store/middlewares/error-middleware'
import { rootReducer } from '@/store/reducer'

const persistConfig: PersistConfig<any> = {
	key: 'root',
	storage,
	whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
			.concat(rtkQueryErrorLogger)
			.concat(api.middleware)
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
