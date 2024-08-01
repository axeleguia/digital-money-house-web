import { Sidebar } from "@/ui/sidebar/sidebar";
import styles from "./dashboard.module.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id={styles.dashboard}>
      <Sidebar />
      <div id={styles.content}>{children}</div>
    </section>
  );
}
