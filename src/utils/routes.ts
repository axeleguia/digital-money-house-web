type RouteType = {
  name: string;
  path: string;
  children?: RouteType[];
};

export const routes: RouteType[] = [
  {
    name: "Inicio",
    path: "/dashboard",
  },
  {
    name: "Actividad",
    path: "/dashboard/activity",
  },
  {
    name: "Tu perfil",
    path: "/dashboard/profile",
  },
  {
    name: "Cargar dinero",
    path: "/dashboard/deposits",
    children: [
      {
        name: "Transferencia bancaria",
        path: "/dashboard/deposits/account",
      },
      {
        name: "Seleccionar tarjeta",
        path: "/dashboard/deposits/cards",
      },
    ],
  },
  {
    name: "Pagar Servicios",
    path: "/dashboard/payments",
  },
  {
    name: "Tarjetas",
    path: "/dashboard/cards",
  },
  {
    name: "Cerrar Sesión",
    path: "/logout",
  },
];
