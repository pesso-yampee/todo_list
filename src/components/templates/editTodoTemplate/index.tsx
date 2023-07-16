import { PageTitle } from "components/atoms/pageTitle";
import { Navigation } from "components/organisms/navigation";
import styles from "./style.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "components/atoms/FormInput";
import { FormInputType } from "types/todo";
import { Button } from "components/atoms/button";

type Props = {
  text: string;
};

export function EditTodoTemplate({ text }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>();
  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput register={register} name="title" />
          <FormInput register={register} name="contents" />
          <Button type="submit" className="button-primary">
            <span>Edit Todo</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
