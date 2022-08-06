import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.route";
import ListItemDetail from "./routes/list-item-detail/list-item-detail.route";

const App: FC = () => {
    return (
        <Routes>
            <Route path={""} element={<Home />} />
            <Route path={"/:itemId"} element={<ListItemDetail />} />
        </Routes>
    );
};

export default App;
