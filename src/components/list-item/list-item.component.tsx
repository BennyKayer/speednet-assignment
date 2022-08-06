import { FC } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../checkbox/checkbox.component";
import "./list-item.styles.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface IListItem {
    datum: IData;
}

const ListItem: FC<IListItem> = ({ datum }) => {
    const { subject, snippet, id, from } = datum;

    return (
        <div className="list-item-container">
            <Card>
                <Card.Header>Od: {from}</Card.Header>
                <Card.Body>
                    <Card.Title className={"item-title"}>
                        <Checkbox datum={datum} />
                        {subject}
                    </Card.Title>
                    <Card.Text>{snippet}</Card.Text>
                    <Button variant={"primary"}>
                        <Link className="list-item-details-link" to={`/${id}`}>
                            Szczegóły &#8594;
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ListItem;
