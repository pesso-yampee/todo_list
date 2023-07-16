import { PageTitle } from "components/atoms/pageTitle";
import { Navigation } from "components/organisms/navigation";
import styles from "./style.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputType } from "types/todo";
import { Button } from "components/atoms/button";
import { useRouter } from "next/router";
import { PAGE_PATH } from "constants/pagePath";
import { FormInput } from "components/atoms/FormInput";

type Props = {
  text: string;
};

export function CreateTodoTemplate({ text }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>();
  const onSubmit: SubmitHandler<FormInputType> = (data) => {
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
          <Button type="submit" className="button-primary">
            <span>Create Todo</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
