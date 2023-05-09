import { store } from './store';
import { rootReducer } from './root-reducer';

// export type ApplicationStore = ReturnType<typeof store.getState>;

export type PreloadedState = Partial<ApplicationStore>;

export type ApplicationStore = ReturnType<typeof rootReducer>;
