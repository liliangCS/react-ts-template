import React, { memo } from "react"
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const About: FC<IProps> = () => {
  return <div>About页面</div>
}

export default memo(About)
