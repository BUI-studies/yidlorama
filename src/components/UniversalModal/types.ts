import { ReactNode } from "react"

export type ModalProps = {
    onClose?: () => void
    title: string
    children: ReactNode
}

export type containerOptions = {
    id: string
    mountNode?: HTMLElement
}