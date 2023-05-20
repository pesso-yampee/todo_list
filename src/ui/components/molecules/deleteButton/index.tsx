
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "ui/components/atoms/button";

export function DeleteButton() {
  function clickHandler() {
    window.alert("clicked!!");
  }
  
  return (
    <Button
      type="button"
      ariaLabel="削除する"
      clickEvent={clickHandler}
    >
      <FontAwesomeIcon icon={faTrash} size="1x" />
    </Button>
  )
}