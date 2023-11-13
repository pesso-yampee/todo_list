export type TodoType = {
  title: string
  detail: string
  id: string
}

export type TodoCreateRequest = {
  title: string | null
  detail: string | null
}

export type TodoUpdateRequest = TodoCreateRequest & {
  id: string
}
export type TodoUpdateResponse = TodoCreateRequest & {
  id: string
}
