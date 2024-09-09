import { ServiceForm } from "@/components/dashboard/payments/service-form/service-form";
import { ServiceList } from "@/components/dashboard/payments/service-list/service-list";

export default async function Page() {
  return (
    <>
      <ServiceForm />
      <ServiceList />
    </>
  );
}
