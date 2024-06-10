import { containerOptions } from './types'

const createContainer = (options: containerOptions) => {
    if (document.getElementById(options.id)) {
        return
    }
    const { id, mountNode = document.body } = options

    const portalContainer = document.createElement("div")
    portalContainer.setAttribute("id", id)
    mountNode.appendChild(portalContainer)
}

export { createContainer }
