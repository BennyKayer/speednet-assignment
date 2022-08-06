import { FC, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ListContext } from "../../contexts/list.context";
import "./list-item-detail.styles.scss";

const ListItemDetail: FC = () => {
    const { itemId } = useParams();
    const { getItemById } = useContext(ListContext);
    const item = getItemById(itemId ? Number(itemId) : 0);

    return (
        <div className="list-item-detail-container">
            <Link className="go-back-link" to={"/"}>
                &#8592;
            </Link>
            {item && (
                <div className="list-item-detail">
                    <div className="from">{item.from}</div>
                    <div className="sent-date">{item.sent_date}</div>
                    <div className="subject">{item.subject}</div>
                    <div className="snippet">{item.snippet}</div>
                </div>
            )}
        </div>
    );
};

export default ListItemDetail;
