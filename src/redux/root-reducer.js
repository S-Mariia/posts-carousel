import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import deliveryReducer from './slice';

const persistConfig = {
  key: 'delivery',
  storage: storage,
  whitelist: ['cart', 'currentShopId'],
};

const rootReducer = persistReducer(persistConfig, deliveryReducer);

export default rootReducer;
