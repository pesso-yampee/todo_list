import { Input } from "ui/components/atoms/Input";

export function SearchTodoInput() {
  function keyDownEvent() {
    window.alert("search!!!!!");
  }
  return <Input placeholder="Search Keyword" keyDownEvent={keyDownEvent} />;
}
