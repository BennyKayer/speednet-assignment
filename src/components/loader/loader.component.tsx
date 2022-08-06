import { FC } from "react";
import "./loader.styles.scss";
import Spinner from "react-bootstrap/Spinner";

const Loader: FC = () => {
    return (
        <div className="loader-container">
            <Spinner animation={"border"} size={"sm"} />
        </div>
    );
};

export default Loader;
