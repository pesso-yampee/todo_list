export type TodoType = {
  id: string
  detail: string
  title: string
}

export type TodoCreateRequest = {
  detail: string | null
  title: string | null
}

export type TodoUpdateRequest = TodoCreateRequest & {
  id: string
}
export type TodoUpdateResponse = TodoCreateRequest & {
  id: string
}
