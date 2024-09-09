"use client";

import { Input } from "@/components/shared/input/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { ActivityFilter } from "../activity-filter/activity-filter";
import styles from "./activity-form.module.css";

type ActivityFormProps = {
  showFilter?: boolean;
};

export const ActivityForm = ({ showFilter }: ActivityFormProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const schema = z.object({
    search: z.string(),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = controls;

  const onSubmit = (data: FormData) => {
    if (pathname === "/dashboard") {
      router.push("/dashboard/activity");
    }
  };

  return (
    <FormProvider {...controls}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.search}>
          <Input
            fieldName="search"
            type="text"
            placeholder="Buscar en tu actividad"
            width="full"
            icon="search"
            iconColor="gray"
          />
          {showFilter && <ActivityFilter />}
        </div>
      </form>
    </FormProvider>
  );
};
