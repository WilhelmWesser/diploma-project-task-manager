import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import validateTaskFields from "../utils/validators/taskCreationValidator";
import { useTasks } from "../hooks/useTasks";

const EditTaskPage = () => {
    const { taskId } = useParams();
    const history = useHistory();
    const [data, setData] = useState();
    const { getTaskById, updateTask } = useTasks();

    const taskToEdit = getTaskById(taskId);
    useEffect(() => {
        setData({ ...taskToEdit });
    }, []);

    const handleChange = (event) => {
        let preWorkedValue = event.target.value;

        switch (preWorkedValue) {
            case "urgent":
                preWorkedValue = {
                    rate: 3,
                    canWaitForExecution: event.target.value
                };
                break;
            case "for 1-3 days":
                preWorkedValue = {
                    rate: 2,
                    canWaitForExecution: event.target.value
                };
                break;
            case "for a long time":
                preWorkedValue = {
                    rate: 1,
                    canWaitForExecution: event.target.value
                };
                break;
            default:
                break;
        }

        setData((prevState) => ({
            ...prevState,
            [event.target.name]: preWorkedValue
        }));
    };

    const handleSave = (event) => {
        event.preventDefault();
        if (validateTaskFields(data)) {
            updateTask(data);
            history.replace("/myTasks");
        }
    };

    if (data) {
        return (
            <form className="d-flex flex-column justify-content-left m-5">
                <div className="d-flex flex-column align-items-center bg-dark text-warning rounded w-25">
                    <h6 className="text-warning text-center mt-2">Heading</h6>
                    <div className="input-group mb-3 border-warning w-75">
                        <input
                            name="heading"
                            type="text"
                            className="form-control bg-dark text-warning w-75"
                            value={data.heading}
                            onChange={handleChange}
                        />
                    </div>
                    <select
                        name="status"
                        className="custom-select mb-3 text-center text-warning bg-dark border-warning rounded w-75"
                        defaultValue={data.status}
                        onChange={handleChange}
                    >
                        <option value="not started" className="text-danger">
                            Not started
                        </option>
                        <option value="in process" className="text-primary">
                            In process
                        </option>
                        <option value="completed" className="text-success">
                            Completed
                        </option>
                    </select>
                    <select
                        name="priority"
                        className="custom-select mb-2 text-center text-warning bg-dark rounded border-warning w-75"
                        defaultValue={data.priority.canWaitForExecution}
                        onChange={handleChange}
                    >
                        <option disabled value="importance level">
                            Importance level
                        </option>
                        <option value="urgent">Urgent</option>
                        <option value="for 1-3 days">For 1-3 days</option>
                        <option value="for a long time">For a long time</option>
                    </select>
                    <h6 className="text-warning">Responsible</h6>
                    <div className="input-group mb-3 border-warning w-75">
                        <input
                            name="responsible"
                            type="text"
                            className="form-control bg-dark text-warning"
                            value={data.responsible}
                            onChange={handleChange}
                        />
                    </div>
                    <h6 className="text-warning">Terms</h6>
                    <div className="input-group mb-3 border-warning w-75">
                        <input
                            name="terms"
                            type="text"
                            className="form-control bg-dark text-warning"
                            value={data.terms}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group align-items-left">
                    <textarea
                        name="content"
                        className="form-control text-warning bg-dark mt-2 mb-2"
                        rows="3"
                        placeholder="Task description"
                        value={data.content}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-warning text-dark w-25"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </form>
        );
    } else {
        return <h1>Loading.....</h1>;
    }
};

export default EditTaskPage;
