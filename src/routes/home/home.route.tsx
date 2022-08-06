import React, { FC, useContext } from "react";
import ListItem from "../../components/list-item/list-item.component";
import { ListContext } from "../../contexts/list.context";
import DATA from "../../data";
import "./home.styles.scss";

const Home: FC = () => {
    const { checkedCount } = useContext(ListContext);

    return (
        <div className="app-container">
            <h2 className="checked-count">{checkedCount}</h2>
            {DATA.map((datum) => {
                return <ListItem key={datum.id} datum={datum} />;
            })}
        </div>
    );
};

export default Home;
