import { createContext, useState } from "react";

export const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
    const [fibNumber, setFibNumber] = useState("");
    const [fibSeries, setFibSeries] = useState([]);
    const [armNumber, setArmNumber] = useState("");
    const [armResult, setArmResult] = useState("");

    return (
        <NumberContext.Provider value={{
            fibNumber, setFibNumber,
            fibSeries, setFibSeries,
            armNumber, setArmNumber,
            armResult, setArmResult
        }}>
            {children}
        </NumberContext.Provider>
    );
};
