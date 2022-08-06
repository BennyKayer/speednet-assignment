import { FC, useContext, useState } from "react";
import { ListContext } from "../../contexts/list.context";
import "./checkbox.styles.scss";

interface ICheckbox {
    datum: IData;
}

const Checkbox: FC<ICheckbox> = ({ datum }) => {
    const { is_unread } = datum;
    const [checked, setChecked] = useState(is_unread);
    const { toggleDatumUnread } = useContext(ListContext);

    const handleChange = () => {
        toggleDatumUnread(datum.id);
        setChecked(!checked);
    };

    return (
        <div className="checkbox-container">
            <input type="checkbox" checked={checked} onChange={handleChange} />
        </div>
    );
};

export default Checkbox;