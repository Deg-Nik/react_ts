import Input from "components/Input/Input";
import {
  InputsContainer,
  LI,
  OutputContainer,
  Paragraph,
  Strong,
  TaskButton,
  TodoFormContainer,
  UL,
} from "./styles";
import { type Todo } from "./types";
import Button from "components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { v4 } from "uuid";

const validationSchema = Yup.object({
  title: Yup.string().min(3, "Minimum 3 simbol").required("Enter task"),
  description: Yup.string().required("Enter description"),
});

export default function TodoForm() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newTodo: Todo = {
        id: v4(),
        title: values.title,
        description: values.description,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      resetForm();
      console.log(values);
    },
  });

  const toggleTodoStatus = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          name="title"
          label={"Task Name"}
          placeholder="Enter task"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.title}
        />
        <Input
          name="description"
          label={"Task description"}
          placeholder="Enter description"
          type="text"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.description}
        />
        <Button name={"Add task"} type="submit" />
      </InputsContainer>
      <OutputContainer>
        <UL>
          {todos.map((todo) => (
            <LI key={todo.id}>
              <Strong
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Strong>
              <Paragraph>{todo.description}</Paragraph>
              <TaskButton>
                <Button
                  name={todo.completed ? "return" : "close"}
                  onClick={() => toggleTodoStatus(todo.id)}
                />
                <Button
                  isRed
                  name={"delete"}
                  onClick={() => deleteTodo(todo.id)}
                />
              </TaskButton>
            </LI>
          ))}
        </UL>
      </OutputContainer>
    </TodoFormContainer>
  );
}
