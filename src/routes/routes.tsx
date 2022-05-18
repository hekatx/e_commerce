import { Landing } from "@/views/landing";
import { Route, Routes } from "react-router-dom";

export const publicRoutes = [
  {
    path: "/",
    element: (
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    ),
  },
];
