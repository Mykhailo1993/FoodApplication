import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'reduxjs-toolkit-persist/lib/stateReconciler/hardSet';

import completedReducer from './features/onboarding/onboardingSlice';

const rootReducer = combineReducers({
  completed: completedReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const persistedReduce = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReduce,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
