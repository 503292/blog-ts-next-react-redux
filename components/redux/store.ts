import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import postsReducers from './posts/postsReducers';

const postPersistConfig = {
  key: 'posts',
  storage,
};

const rootReducer = combineReducers({
  posts: persistReducer(postPersistConfig, postsReducers),
});

const middleware = [ReduxThunk];

const enhancer = applyMiddleware(...middleware);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store);