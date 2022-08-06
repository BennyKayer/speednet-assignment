import React, { FC, useContext, useState } from "react";
import ListItem from "../../components/list-item/list-item.component";
import { ListContext } from "../../contexts/list.context";
import "./home.styles.scss";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../../components/loader/loader.component";

const Home: FC = () => {
    const itemsPerPage = 5;
    const { checkedCount, data } = useContext(ListContext);
    const [hasMore, setHasMore] = useState(true);
    const [records, setRecords] = useState(itemsPerPage);

    const showItems = (posts: Array<IData>) => {
        var items = [];
        for (var i = 0; i < records; i++) {
            items.push(<ListItem key={posts[i].id} datum={posts[i]} />);
        }
        return items;
    };

    const loadMore = () => {
        if (records === data.length) {
            setHasMore(false);
        } else {
            setTimeout(() => setRecords(records + itemsPerPage), 2000);
            // setRecords(records + itemsPerPage);
        }
    };

    return (
        <div className="home-container">
            <div className="header">
                <h2 className="checked-count">
                    Zaznaczonych elementów: {checkedCount}
                </h2>
            </div>

            <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={<Loader />}
                useWindow={true}
                className={"infinite-scroll"}
            >
                {showItems(data)}
            </InfiniteScroll>
        </div>
    );
};

export default Home;
