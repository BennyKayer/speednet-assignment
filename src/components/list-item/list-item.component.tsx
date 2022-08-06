import { FC } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../checkbox/checkbox.component";
import "./list-item.styles.scss";

interface IListItem {
    datum: IData;
}

const ListItem: FC<IListItem> = ({ datum }) => {
    const { subject, snippet, id } = datum;

    return (
        <div className="list-item-container">
            <Checkbox datum={datum} />
            <h4 className="list-item-subject">{subject}</h4>
            <p className="list-item-snippet">{snippet}</p>
            <Link className="list-item-details-link" to={`/${id}`}>
                &#8594;
            </Link>
        </div>
    );
};

export default ListItem;
