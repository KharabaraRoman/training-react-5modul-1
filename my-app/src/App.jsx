import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoPage from './component/todopage';
import NewPage from "./component/newpage";
import Layout from "./component/layout";
import HomePage from "./component/homepage"


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<HomePage/>} />
                    <Route path="news" element={<NewPage />} />
                    <Route path="todo" element={<TodoPage />} />
                </Route>

            </Routes>
        </Router>
    );
}

export default App;