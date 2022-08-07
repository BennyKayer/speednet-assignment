import {
    createContext,
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import DATA from "../data";

// Helpers
const getCheckedCount = (data: IListContext["data"]) => {
    return data.reduce((total, current) => {
        if (current.is_unread) {
            return total + 1;
        } else {
            return total;
        }
    }, 0);
};

export const HUGE_DATA_LENGTH = 10000;
const HUGE_DATA: Array<IData> = new Array(HUGE_DATA_LENGTH)
    .fill(DATA[0])
    .map((datum, index) => ({ ...datum, id: Number(`${datum.id}${index}`) }));

// Context
interface IListContext {
    data: Array<IData>;
    setData: Dispatch<SetStateAction<Array<IData>>>;
    toggleDatumUnread: (id: IData["id"]) => void;
    checkedCount: number;
    getItemById: (id: IData["id"]) => IData | undefined;
}

const defaultValue: IListContext = {
    data: [],
    setData: () => {},
    toggleDatumUnread: () => {},
    checkedCount: 0,
    getItemById: () => undefined,
};
export const ListContext = createContext(defaultValue);

export const ListContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState(HUGE_DATA);
    const [checkedCount, setCheckedCount] = useState(
        getCheckedCount(HUGE_DATA)
    );

    const toggleDatumUnread = (id: IData["id"]) => {
        const newData = data.map((datum) =>
            datum.id === id ? { ...datum, is_unread: !datum.is_unread } : datum
        );
        setData(newData);
    };

    const getItemById = (id: IData["id"]) => {
        return data.find((datum) => `${datum.id}` === `${id}`);
    };

    useEffect(() => {
        setCheckedCount(getCheckedCount(data));
    }, [data]);

    const value = {
        data,
        setData,
        toggleDatumUnread,
        checkedCount,
        getItemById,
    };

    return (
        <ListContext.Provider value={value}>{children}</ListContext.Provider>
    );
};
