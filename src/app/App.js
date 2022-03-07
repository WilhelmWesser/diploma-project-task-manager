import React from "react";
import MainPage from "./pages/mainPage";
import { Switch, Route, Redirect } from "react-router-dom";
import MyTasks from "./pages/myTasks";
import SignInSignUp from "./layouts/signInsignUp";
import HeaderMenu from "./ui/headerMenu";
import EditTaskPage from "./pages/editTaskPage";
import AddTaskPage from "./pages/addTaskPage";
import { TasksProvider } from "./hooks/useTasks";
import AuthProvider from "./hooks/useAuth";
import { ToastContainer } from "react-toastify";
import MyProfile from "./pages/myProfile";
import ProtectedRoute from "./reusableComponents/singleElements/protectedRoutes";
import LogOut from "./layouts/logOut";
import EditMyProfilePage from "./pages/editMyProfilePage";

function App() {
    return (
        <div>
            <AuthProvider>
                <HeaderMenu />
                <TasksProvider>
                    <Switch>
                        <ProtectedRoute
                            path="/myTasks/edit/:taskId?"
                            component={EditTaskPage}
                        />
                        <ProtectedRoute path="/myTasks" component={MyTasks} />
                        <ProtectedRoute
                            path="/myProfile/edit"
                            component={EditMyProfilePage}
                        />
                        <ProtectedRoute
                            path="/myProfile"
                            component={MyProfile}
                        />
                        <ProtectedRoute
                            path="/createTask"
                            component={AddTaskPage}
                        />
                        <ProtectedRoute path="/logout" component={LogOut} />
                        <Route path="/login/:type?" component={SignInSignUp} />
                        <Route path="/" exact component={MainPage} />
                        <Redirect to="/" />
                    </Switch>
                </TasksProvider>
            </AuthProvider>
            <ToastContainer />
        </div>
    );
}

export default App;
