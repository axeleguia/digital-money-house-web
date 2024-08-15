"use client";

import React from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const routes: any[] = [
    {
      name: "Inicio",
      path: "/dashboard",
    },
    {
      name: "Actividad",
      path: "/dashboard/actividad",
    },
    {
      name: "Tu perfil",
      path: "/dashboard/perfil",
    },
    {
      name: "Cargar dinero",
      path: "/dashboard/cargar",
    },
    {
      name: "Pagar Servicios",
      path: "/dashboard/servicios",
    },
    {
      name: "Tarjetas",
      path: "/dashboard/tarjetas",
    },
    {
      name: "Cerrar Sesión",
      path: "/logout",
    },
  ];

  return (
    <aside id={styles.sidebar}>
      <ul>
        {routes.map((route) => (
          <li
            key={route.path}
            className={route.path === pathname ? styles.active : ""}
          >
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
