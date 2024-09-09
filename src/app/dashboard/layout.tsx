import { Sidebar } from "@/components/shared/sidebar/sidebar/sidebar";
import { Alert } from "@/components/shared/alert/alert";
import styles from "./dashboard.module.css";
import { Breadcrumb } from "@/components/dashboard/breadcrumb/breadcrumb";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id={styles.dashboard}>
      <Sidebar />
      <div id={styles.content}>
        <Breadcrumb />
        {children}
      </div>
      <Alert />
    </section>
  );
}
