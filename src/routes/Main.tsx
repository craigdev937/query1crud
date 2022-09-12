import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "../containers/Users";
import { Details } from "../containers/Details";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/users/:id" element={<Details />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


