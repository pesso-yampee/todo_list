import { PageTitle } from "components/atoms/PageTitle";
import { Navigation } from "components/organisms/navigation";
import styles from "./style.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputType } from "types/todo";
import { Button } from "components/atoms/Button";
import { useRouter } from "next/router";
import { PAGE_PATH } from "constants/pagePath";
import { FormInput } from "components/atoms/FormInput";
import { usePostCraeteTodo } from "hooks/usePostCraeteTodo";

type Props = {
  text: string;
};

export function CreateTodoTemplate({ text }: Props) {
  const router = useRouter();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>();
  const {doPost} = usePostCraeteTodo();

  const onSubmit: SubmitHandler<FormInputType> = async (data) => {
    await doPost(data);
    router.push(PAGE_PATH.TOP);
  };

  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle text={text} />
      <div className={styles.contents}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput placeholder="Title" name="title" register={register} />
          <FormInput
            placeholder="Contents"
            name="contents"
            register={register}
          />
          <div className={styles.flexContainer}>
            <Button
              type="reset"
              className="button-cancel"
              onClick={() => reset()}
            >
              <span>Reset</span>
            </Button>
            <Button type="submit" className="button-primary">
              <span>Create todo</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
