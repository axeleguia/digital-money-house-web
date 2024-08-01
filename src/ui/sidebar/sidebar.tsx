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
      path: "/activity",
    },
    {
      name: "Tu perfil",
      path: "/profile",
    },
    {
      name: "Cargar dinero",
      path: "/deposit",
    },
    {
      name: "Pagar Servicios",
      path: "/services",
    },
    {
      name: "Tarjetas",
      path: "/cards",
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
