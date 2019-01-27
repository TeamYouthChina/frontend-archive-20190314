import {store} from '../global-data/store';

export const languageHelper = () => {
  switch (store.getState().language) {
    case 'en_US':
      return 1;
    default: // 'zh_CN'
      return 0;
  }
};
