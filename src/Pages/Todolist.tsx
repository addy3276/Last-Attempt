import { Paper, Stack } from "@mantine/core";
import classes from "../ArticleCardImage/ArticleCardImage.module.css";
import { TextInput } from "@mantine/core";
import { useState } from "react";
import { Modal } from "@mantine/core";

// import "@mui/material/Fab";

// import "@mui/icons-material/styles";

export function Todolist() {
  const [modal, setModalstate] = useState({
    isOpen: false,
    taskInput: "",
  });

  const toggleModal = () => {
    setModalstate((prevState) => ({
      isOpen: !prevState.isOpen,
      taskInput: "",
    }));
  };

  // const handlePost = () => {
  //   console.log("Task posted:", modal.taskInput);
  //   toggleModal();
  // };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Paper shadow="md" p="xl" radius="md" className={classes.card}>
        <h1>TO DO LIST</h1>
        <Stack>
          {/* <Button onClick={toggleModal} variant="outline" color="blue">
            Create
          </Button> */}

          <Modal
            title="Create Task"
            opened={modal.isOpen}
            onClose={toggleModal}
            size="sm"
          >
            <Stack>
              <TextInput
                value={modal.taskInput}
                onChange={(event) =>
                  setModalstate((prevState) => ({
                    ...prevState,
                    taskInput: event.target.value,
                  }))
                }
                size="xl"
                radius="lg"
                label="Task"
                placeholder="Enter your task"
              />
              {/* <Button onClick={handlePost} color="blue">
                Post
              </Button> */}
            </Stack>
          </Modal>
          <Stack>
            {[0, 1].map((index) => (
              <TextInput
                key={index}
                size="xl"
                radius="lg"
                label="Input label"
                placeholder="Input placeholder"
              />
            ))}
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
}
export default Todolist;
