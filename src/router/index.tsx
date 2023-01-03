import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
import type { RouteObject } from "react-router-dom"

import Home from "@/views/home"
const About = lazy(
  () => import(/* webpackChunkName: "about" */ "@/views/about")
)

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
]

export default routes
