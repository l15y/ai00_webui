import chatRoutes from "@/views/app/chat/chatRoutes";

export default [
  {
    path: "/apps/chat",
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "APP",
      title: "Chat",
    },
    component: () =>
      import(/* webpackChunkName: "app-chat" */ "@/views/app/chat/ChatApp.vue"),
    children: [...chatRoutes],
  },
  {
    path: "/apps/lunwen",
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "APP",
      title: "LunWen",
    },
    component: () =>
      import(/* webpackChunkName: "app-chat" */ "@/views/app/lunwen.vue")
  },
];
