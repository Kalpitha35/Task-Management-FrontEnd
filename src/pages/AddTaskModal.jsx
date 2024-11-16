import React, { useState } from 'react'
import { Button, Modal, Form, ProgressBar, Pagination } from 'react-bootstrap';
import { addTaskAPI } from '../services/allAPI';


const AddTaskModal = ({ onAddTask }) => {

  const [showModal, setShowModal] = useState(false);

  const [taskDetails, setTaskDetails] = useState({
    title: "", description: "", startDate: "", endDate: "", status: "", progress: ""
  })
  console.log(taskDetails);


  // Modal controls
  const handleShow = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  //   const handleAddTask = async () => {
  //     const { title, description, startDate, endDate, status } = taskDetails
  //     const reqBody = new FormData()
  //     reqBody.append("title",title)
  //     reqBody.append("description",description)
  //     reqBody.append("startDate",startDate)
  //     reqBody.append("endDate",endDate)
  //     reqBody.append("status",status)
  //     // reqBody.append("projectImg",projectImg)
  //     if (title && description && startDate && endDate && status) {
  //         const token = sessionStorage.getItem("token")
  //         if (token) {
  //             const reqHeader = {
  //                 "Authorization": `Bearer ${token}`,
  //                 "Content-Type": "application/json"
  //             }
  //             // make api call
  //             try {
  //                 const result = await addTaskAPI(taskDetails, reqHeader)
  //                 console.log(result);
  //                 if (result.status==200) {
  //                     alert("Task Added successfully!!!")
  //                     setAddTaskResponse(result)
  //                     handleClose()
  //                 } else {
  //                     alert(result.response.data)
  //                 }

  //             } catch (err) {
  //                 console.log(err);

  //             }
  //         }

  //     } else {
  //         alert("Please fill the form completely")
  //     }

  // }

  // Remove the FormData creation if your API accepts JSON
  const handleAddTask = async () => {
    const { title, description, startDate, endDate, status, progress } = taskDetails;

    const newTask = { title, description, startDate, endDate, status, progress };
    if (title && description && startDate && endDate && status) {
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json" // Ensure your backend accepts JSON
        };

        try {
          const result = await addTaskAPI(taskDetails, reqHeader);
          console.log(result);
          if (result.status === 200) {
            alert("Task Added successfully!!!");
            onAddTask(newTask); // Call the function passed from Home to update the task list

            // Reset form fields to initial state
            setTaskDetails({
              title: "",
              description: "",
              startDate: "",
              endDate: "",
              status: "",
              progress: ""
            });
            handleCloseModal();
          } else {
            alert(result.response.data);
          }
        } catch (err) {
          console.error(err);
        }
      }
    } else {
      alert("Please fill the form completely");
    }
  };


  return (
    <>
      <button onClick={handleShow} className="btn btn-primary">ADD NEW TASK</button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group controlId="formHeading">
              <Form.Label>Task Heading</Form.Label>
              <Form.Control
                type="text"
                value={taskDetails.title}
                onChange={e => setTaskDetails({ ...taskDetails, title: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={taskDetails.description}
                onChange={e => setTaskDetails({ ...taskDetails, description: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formStartDate" className="mt-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={taskDetails.startDate}
                onChange={e => setTaskDetails({ ...taskDetails, startDate: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEndDate" className="mt-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={taskDetails.endDate}
                onChange={e => setTaskDetails({ ...taskDetails, endDate: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formStatus" className="mt-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                value={taskDetails.status}
                onChange={e => setTaskDetails({ ...taskDetails, status: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProgress" className="mt-3">
              <Form.Label>Progress (%)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="100"
                value={taskDetails.progress}
                onChange={e => setTaskDetails({ ...taskDetails, progress: e.target.value })}
                required
              />
            </Form.Group>
            <Button onClick={handleAddTask} variant="primary" className="mt-3">
              Save Task
            </Button>
          </Form>
        </Modal.Body>
      </Modal>




    </>
  )
}

export default AddTaskModal