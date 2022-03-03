import React from "react";
import MainPage from "./pages/mainPage";
import { Switch, Route, Redirect } from "react-router-dom";
import MyTasks from "./pages/myTasks";
import SignInSignUp from "./layouts/signInsignUp";
import HeaderMenu from "./ui/headerMenu";
import EditTaskPage from "./pages/editTaskPage";
import AddTaskPage from "./pages/addTaskPage";
import { TasksProvider } from "./hooks/useTasks";

function App() {
    return (
        <div>
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
                    <Redirect to="/" />
                </Switch>
            </TasksProvider>
        </div>
    );
}

export default App;
