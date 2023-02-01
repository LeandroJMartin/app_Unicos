import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface IContext {
  state: boolean;
  toogleState: () => void;
  changeState: (newState: boolean) => void;
}

const defaultValues = {
  state: false,
  toogleState: () => {},
  changeState: (newState: boolean) => {
    newState;
  },
};

export const MenuMobileContext = createContext<IContext>(defaultValues);

export default function MenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [state, setState] = useState(defaultValues.state);

  const changeState = (newState: boolean) => {
    if (!!newState) return;

    setState(newState);
  };

  const toogleState = () => {
    setState((prev) => !prev);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', () => setState(false));

    window.addEventListener('resize', function (e) {
      if (this.window.innerWidth > 768) setState(false);
    });

    return () => {
      window.removeEventListener('resize', function (e) {
        if (this.window.innerWidth > 768) setState(false);
      });

      router.events.off('routeChangeStart', () => setState(false));
    };
  }, []);

  useEffect(() => {
    if (state) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [state]);

  return (
    <MenuMobileContext.Provider value={{ state, toogleState, changeState }}>
      {children}
    </MenuMobileContext.Provider>
  );
}

export const useMenuMobileContext = () => useContext(MenuMobileContext);
