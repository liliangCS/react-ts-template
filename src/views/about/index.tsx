import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { shallowEqual } from "react-redux"
import { useAppSelector, useAppDispatch } from "@/hooks/useApp"
import { changeMessageAction } from "@/store/modules/about"

interface IProps {
  children?: ReactNode
}

const About: FC<IProps> = () => {
  const { message } = useAppSelector(
    (state) => ({
      message: state.about.message
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()
  const handleChangeMessage = () => {
    dispatch(changeMessageAction("about页面的message被修改"))
  }

  return (
    <div>
      <h2>About页面</h2>
      <div>消息：{message}</div>
      <button onClick={handleChangeMessage}>改变消息</button>
    </div>
  )
}

export default memo(About)
