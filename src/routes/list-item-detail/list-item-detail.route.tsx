import { FC, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ListContext } from "../../contexts/list.context";
import "./list-item-detail.styles.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ListItemDetail: FC = () => {
    const { itemId } = useParams();
    const { getItemById } = useContext(ListContext);
    const item = getItemById(itemId ? Number(itemId) : 0);

    return (
        <div className="list-item-detail-container">
            {item && (
                <Card className="text-center list-item-detail">
                    <Card.Header>Od: {item.from}</Card.Header>
                    <Card.Body>
                        <Card.Title>{item.subject}</Card.Title>
                        <Card.Text>{item.snippet}</Card.Text>
                        <Button variant="primary">
                            <Link className="go-back-link" to={"/"}>
                                Powrót &#8592;
                            </Link>
                        </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        {item.sent_date}
                    </Card.Footer>
                </Card>
            )}
        </div>
    );
};

export default ListItemDetail;
