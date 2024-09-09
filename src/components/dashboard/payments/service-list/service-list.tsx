"use client";

import { List } from "@/components/shared/list/list";
import React from "react";
import { ServiceItem } from "../service-item/service-item";
import { useGetServices } from "@/hooks/api-query-hook";

export const ServiceList = () => {
  const { data } = useGetServices();

  return (
    <List title="Más recientes">
      <ul>{data?.map((item) => <ServiceItem key={item.id} data={item} />)}</ul>
    </List>
  );
};
