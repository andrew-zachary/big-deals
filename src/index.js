import "regenerator-runtime/runtime";
import './utilities/i18n.js';

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//app parts
import Auth from "./components/app/auth.jsx";
import Loading from './components/app/loading.jsx';
import ConfirmModal from "./components/app/confirm-modal.jsx";
import SliderModal from "./components/app/slider-modal.jsx";
import AppError from "./components/app/error.jsx";
import NotificationModal from "./components/app/notification-modal.jsx";
import AppPrefs from "./components/app/prefs.jsx";
import Authed from "./guards/authed.jsx";

//pages
import HomePage from './pages/home.jsx';
const AdminPage = React.lazy(()=> import('./pages/admin.jsx'));
import AdminChangePassword from './pages/admin-change-password-form.jsx';
import AdminAppPreferences from './pages/admin-app-preferences.jsx';
import AdminAddBalance from './pages/admin-add-balance.jsx';
import AdminHome from './pages/admin-home.jsx';
import ShoppingPage from './pages/shopping.jsx';
import CommentsPage from './pages/comments.jsx';
import MailVerify from './pages/mail-verify.jsx';
import ResetPassword from './pages/reset-password.jsx';

//layout
import MainLayout from "./layout/main.jsx";

//styles
import './index.scss';
import 'simplebar/dist/simplebar.min.css';

//store
import { store } from "./store/create-store.js";
import { Provider } from "react-redux";

//app
const App = () => {
    return <React.Suspense fallback={<span>loading</span>}>
        <Provider store={store}>
            <AppError />
            <ConfirmModal />
            <SliderModal />
            <NotificationModal />
            <Loading />
            <Auth />
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/shopping" element={<ShoppingPage />} />
                        <Route path="/admin" element={<Authed Component={AdminPage} />}>
                            <Route path="" element={<AdminHome />} />
                            <Route path="change-password" element={<AdminChangePassword />} />
                            <Route path="app-preferences" element={<AdminAppPreferences />} />
                            <Route path="add-balance" element={<AdminAddBalance />} />
                        </Route>
                        <Route path="/comments/:id" element={<CommentsPage />} />
                        <Route path="/verify-email/:mail/:token" element={<MailVerify />} />
                        <Route path="/reset-password/:mail/:date/:token/:lang" element={<ResetPassword />} />
                    </Route>
                </Routes>
            </Router>
            <AppPrefs />
        </Provider>
    </React.Suspense>
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("bd-app"));