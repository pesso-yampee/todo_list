export type TodoType = {
  title: string
  detail: string
  id: number
}

export type TodoCreateRequest = {
  title: string | null
  detail: string | null
  id: number
}

export type TodoUpdateRequest = TodoCreateRequest
export type TodoUpdateResponse = TodoCreateRequest
