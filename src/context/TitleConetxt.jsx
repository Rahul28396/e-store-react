import { createContext, useContext } from "react";

const TitleContext = createContext('E-Store');

const TitleContextProvider = ({ children }) => {
  const setTitle = (title) => {
    document.title = 'GadgetZone - ' + title;
  };

  return (
    <TitleContext.Provider value={{ setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export const useTitle = () => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error("useTitle must be used within a TitleProvider");
  }
  return context;
}

export { TitleContext };
export default TitleContextProvider;