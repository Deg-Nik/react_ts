import {
  NoteFormContainer,
  Title,
  InputContainer,
  Ol,
  Li,
  OutputContainer,
} from "./styles";
import { NOTE_FORM_VALUES } from "components/NoteFormHomework/types";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useState, type ChangeEvent } from "react";
import { v4 } from "uuid";

export default function NoteForm() {
  const [note, setNote] = useState<string>("");
  const [outputNote, setOutputNote] = useState<string[]>([]);

  const onChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const OutputNote = () => {
    if (note.trim() !== "") {
      setOutputNote([...outputNote, note]);
      setNote("");
    }
  };

  const notesList = () => {
    return outputNote.map((output: string) => <Li key={v4()}>{output}</Li>);
  };

  return (
    <NoteFormContainer>
      <Title>Homework 09</Title>
      <InputContainer>
        <Input
          id="note_id"
          name={NOTE_FORM_VALUES.NOTE}
          placeholder="Enter your note"
          label="Your note"
          value={note}
          onChange={onChangeNote}
        />
        <Button name="Add note" type="submit" onClick={OutputNote} />
      </InputContainer>
      <OutputContainer>
        <Ol>{notesList()}</Ol>
      </OutputContainer>
    </NoteFormContainer>
  );
}
