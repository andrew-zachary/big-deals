import "regenerator-runtime/runtime";
import "core-js/stable";

import React, {useReducer, StrictMode} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//app parts
import Auth from "./components/app/auth.jsx";
import Loading from './components/app/loading.jsx';
import ConfirmModal from "./components/app/confirm-modal.jsx";
import SliderModal from "./components/app/slider-modal.jsx";
import AppError from "./components/app/error.jsx";

//pages
import HomePage from './pages/home.jsx';
import AdminPage from './pages/admin.jsx';
import ShoppingPage from './pages/shopping.jsx';
import CommentsPage from './pages/comments.jsx';

//layout
import MainLayout from "./layout/main.jsx";

//contexts
import { layoutContext, layoutReducer, initialState } from "./layout/context.js";

//styles
import './index.scss';

//store
import { store } from "./store/create-store.js";
import { Provider } from "react-redux";

//app
const App = () => {
    const [state, dispatch] = useReducer(layoutReducer, initialState);
    return <Provider store={store}>
        <layoutContext.Provider value={{state, dispatch}}>
            <AppError />
            <ConfirmModal />
            <SliderModal />
            <Loading />
            <Auth />
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/shopping" element={<ShoppingPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/comments/:id" element={<CommentsPage />} />
                    </Route>
                </Routes>
            </Router>
        </layoutContext.Provider>
    </Provider>
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("bd-app"));