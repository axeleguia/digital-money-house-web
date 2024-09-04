import { DepositsOption } from "@/components/dashboard/deposits/deposits-option/deposits-option";
import { PageLayout } from "@/components/shared/page-layout/page-layout";

export default async function Page() {
  const options = [
    {
      title: "Transferencia bancaria",
      icon: "profile",
      pathname: "/dashboard/deposits/account",
    },
    {
      title: "Seleccionar tarjeta",
      icon: "card",
      pathname: "/dashboard/deposits/cards",
    },
  ];

  return (
    <PageLayout>
      {options.map((option) => (
        <DepositsOption key={option.title} {...option} />
      ))}
    </PageLayout>
  );
}
