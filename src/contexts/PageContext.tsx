import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';

type PageContext = {
  isNavigationOpen: boolean;
  isShadowActive: boolean;
  toggleNavigation: (payload?: boolean) => void;
  toggleShadow: (payload?: boolean) => void;
};

const initialState = {
  isNavigationOpen: false,
  isShadowActive: false,
  toggleNavigation: () => {},
  toggleShadow: () => {},
};

const PageContext = createContext<PageContext>(initialState);

enum PageContextActionType {
  TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION',
  TOGGLE_SHADOW = 'TOGGLE_SHADOW',
}

type PageContextAction =
  | {
      type: PageContextActionType.TOGGLE_NAVIGATION;
      payload?: boolean;
    }
  | {
      type: PageContextActionType.TOGGLE_SHADOW;
      payload?: boolean;
    };

function reducer(state: PageContext, action: PageContextAction) {
  switch (action.type) {
    case 'TOGGLE_NAVIGATION':
      return {
        ...state,
        isNavigationOpen: !state.isNavigationOpen,
      };
    case 'TOGGLE_SHADOW':
      return {
        ...state,
        isShadowActive: !state.isShadowActive,
      };
    default:
      return state;
  }
}

export const PageContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleNavigation = (payload = state.isNavigationOpen) => {
    dispatch({
      type: PageContextActionType.TOGGLE_NAVIGATION,
      payload,
    });
  };

  const toggleShadow = (payload = state.isShadowActive) => {
    dispatch({
      type: PageContextActionType.TOGGLE_SHADOW,
      payload,
    });
  };

  return (
    <PageContext.Provider
      value={{
        isNavigationOpen: state.isNavigationOpen,
        isShadowActive: state.isShadowActive,
        toggleNavigation,
        toggleShadow,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export function usePageContext() {
  return useContext(PageContext);
}
