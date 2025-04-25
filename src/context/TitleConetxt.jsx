import { createContext } from "react";

const TitleContext = createContext('E-Store');

const TitleContextProvider = ({ children }) => {
  const setTitle = (title) => {
    document.title = title;
  };

  return (
    <TitleContext.Provider value={{ setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export { TitleContext };
export default TitleContextProvider;