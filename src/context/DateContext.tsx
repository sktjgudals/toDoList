import React, { createContext, useState } from "react";

export const DateContext = createContext({
  date: new Date(),
  setDateHandler: (date: Date) => {},
});

const DateProvider = ({ children }: any) => {
  const [date, setDate] = useState<Date>(new Date());
  const setDateHandler = (date: Date) => setDate(date);
  return (
    <DateContext.Provider value={{ date, setDateHandler }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
