import { FC, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { PortalProps } from "./types"

const Portal:FC<PortalProps> = (props) => {
    const { id, children } = props
    const [container, setContainer] = useState<HTMLElement>()

    useEffect(() => {
        if (id) {
            const portalContainer = document.getElementById(id)
            portalContainer && setContainer(portalContainer)
        }
    }, [id])

    return container ? createPortal(children, container) : null
}

export default Portal
