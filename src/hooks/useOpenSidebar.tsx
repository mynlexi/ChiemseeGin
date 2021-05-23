import React from "react";

type SideCartOpen = boolean;

type SideCartContextType = {
  sideCartOpen: SideCartOpen;
};

type SideCartUpdateContextType = {
  setSideCartOpen: React.Dispatch<React.SetStateAction<SideCartOpen | null>>;
  toggleSideCart: () => void;
};

const SideCartContext =
  React.createContext<SideCartContextType | undefined>(undefined);
const SideCartUpdateContext =
  React.createContext<SideCartUpdateContextType | undefined>(undefined);

export const useSideCart = (): SideCartContextType | undefined =>
  React.useContext(SideCartContext);
export const useSideCartUpdate = (): SideCartUpdateContextType | undefined =>
  React.useContext(SideCartUpdateContext);

const useSideCartFunctions = () => {
  const [sideCartOpen, setSideCartOpen] = React.useState(false);

  const toggleSideCart = () => setSideCartOpen(!sideCartOpen);

  return {
    sideCartOpen,
    setSideCartOpen,
    toggleSideCart,
  };
};

const SideCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const { sideCartOpen, setSideCartOpen, toggleSideCart } =
    useSideCartFunctions()

  return (
    <SideCartContext.Provider value={{ sideCartOpen }}>
      <SideCartUpdateContext.Provider
        value={{
          setSideCartOpen,
          toggleSideCart,
        }}
      >
        {children}
      </SideCartUpdateContext.Provider>
    </SideCartContext.Provider>
  );
};

export default SideCartProvider;
