import { AccountInfo } from "@/components/dashboard/activity/account-info/account-info";
import { ProfileEditorForm } from "@/components/dashboard/activity/profile-editor-form/profile-editor-form";
import { Icon } from "@/components/shared/icons/icons";
import Link from "next/link";
import styles from "./activity-page.module.css";

export const ActivityPage = () => {
  return (
    <div id={styles.page}>
      <ProfileEditorForm />
      <Link href={"/dashboard/payments"}>
        <div className={styles.paymentMethods}>
          Gestioná los medios de pago
          <Icon icon="arrow" color="black" />
        </div>
      </Link>
      <AccountInfo />
    </div>
  );
};
