import React, { Suspense } from "react"
import { useRoutes, Link } from "react-router-dom"
import routes from "./router"

export default function App() {
  return (
    <div className="app">
      <Link to="/home">首页</Link>
      <Link to="/about">关于</Link>
      <Suspense fallback="文件下载中...">{useRoutes(routes)}</Suspense>
    </div>
  )
}
