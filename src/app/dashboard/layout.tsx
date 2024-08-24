import { Breadcrumb } from "@/components/dashboard/breadcrumb/breadcrumb";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";
import { Alert } from "@/components/shared/alert/alert";
import styles from "./dashboard.module.css";

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
