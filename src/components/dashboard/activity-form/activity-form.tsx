"use client";

import { ActivityList } from "@/components/dashboard/activity-list/activity-list";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../shared/input/input";
import styles from "./activity-form.module.css";

export const ActivityForm = () => {
  const schema = z.object({
    search: z.string(),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  return (
    <FormProvider {...controls}>
      <div className={styles.search}>
        <Input
          fieldName="search"
          type="text"
          placeholder="Buscar en tu actividad"
          width="full"
          icon="search"
          iconColor="gray"
        />
      </div>
      <ActivityList />
    </FormProvider>
  );
};
