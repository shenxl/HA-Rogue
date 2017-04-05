
export default {
  namespace: 'layout',
  state: {
    MenuSelectedKeys: ['/'],
    MenuOpenKeys: ['dashboard'],
    silderCollapsed: true,
  },
  reducers: {
    setMenuSelectedKeys(state, action) {
      return { ...state, MenuSelectedKeys: action.payload };
    },
    setMenuOpenedKeys(state, action) {
      return { ...state, MenuOpenKeys: action.payload };
    },
    collapsed(state, action) {
      return { ...state, silderCollapsed: action.payload };
    },
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const matchpath = pathname.split('/');
        if (matchpath.length > 2) {
          const openedKey = matchpath[1];
          dispatch({
            type: 'setMenuOpenedKeys',
            payload: [openedKey],
          });
        }
        dispatch({
          type: 'setMenuSelectedKeys',
          payload: [pathname],
        });
      });
    },
  },
};
