export type ContactState = {
  status: "idle" | "success" | "error"
  errors?: { name?: string; email?: string; message?: string }
  formError?: string
}

export const initialContactState: ContactState = { status: "idle" }
