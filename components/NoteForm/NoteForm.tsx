'use client'
import { useRouter } from "next/navigation";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import * as Yup from "yup";
// import type { NoteTag } from "../../types/note";
// import { createNote } from "../../lib/api";
import css from "./NoteForm.module.css";
import { useNoteStore } from "@/lib/store/noteStore";
import { NoteTag } from "@/types/note";
import { createNote } from "@/lib/api";

interface NoteFormProps {
 formAction?: (formData: FormData) => void | Promise<void>;
}
export default function NoteForm({ formAction }: NoteFormProps) {
  const router = useRouter();
  const { draft, setDraft, clearDraft } = useNoteStore();

  const handleSubmit = async (formData: FormData) => {
    const newNote = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      tag: formData.get("tag") as NoteTag,
    }
    await createNote(newNote);

    clearDraft();
    router.back();
  };

  return (
   
      <form action={handleSubmit} className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" value={draft.title}
         onChange={(e) => setDraft({...draft, title: e.target.value})} required className={css.input} />
       
        </div>

        <div className={css.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
          name="content"
          value={draft.content}
          onChange={(e) =>
            setDraft({ ...draft, content: e.target.value })
          }
          rows={8}
          required
            className={css.textarea}
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="tag">Tag</label>
        <select
          id="tag"
          name="tag"
          value={draft.tag}
          onChange={(e) =>
            setDraft({ tag: e.target.value as NoteTag})
          }
          required
          className={css.select}>
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>

        <div className={css.actions}>
        
          <button
            type="submit"
            className={css.submitButton}
          >
            Create note +
          </button>
        </div>
      </form>
  );
}
