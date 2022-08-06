import React, { FC, useContext } from "react";
import ListItem from "../../components/list-item/list-item.component";
import { HUGE_DATA_LENGTH, ListContext } from "../../contexts/list.context";
import "./home.styles.scss";

const Home: FC = () => {
    const { checkedCount, data, toggleDataSource } = useContext(ListContext);

    return (
        <div className="app-container">
            <div className="toggle-data-buttons-container">
                <button
                    className="toggle-data-button"
                    onClick={toggleDataSource}
                >
                    {data.length === HUGE_DATA_LENGTH
                        ? "Zmień na oryginalne dane"
                        : "Zmień na wielkie dane"}
                </button>
            </div>
            <h2 className="checked-count">{checkedCount}</h2>
            {data.map((datum, index) => {
                return <ListItem key={index} datum={datum} />;
            })}
        </div>
    );
};

export default Home;
