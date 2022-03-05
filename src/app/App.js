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

function App() {
    return (
        <div>
            <AuthProvider>
                <HeaderMenu />
                <TasksProvider>
                    <Switch>
                        {/* <Route path="/edit" component={EditTaskPage} /> */}
                        <Route
                            path="/myTasks/edit/:taskId?"
                            component={EditTaskPage}
                        />
                        <Route path="/login/:type?" component={SignInSignUp} />
                        <Route path="/myTasks" component={MyTasks} />
                        <Route path="/createTask" component={AddTaskPage} />
                        <Route path="/" exact component={MainPage} />
                        <Redirect to="/login/signIn" />
                    </Switch>
                </TasksProvider>
            </AuthProvider>
            <ToastContainer />
        </div>
    );
}

export default App;
