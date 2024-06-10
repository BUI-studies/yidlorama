import { FC, useState, useEffect, useCallback, useRef } from 'react'
import Portal from '../Portal/Portal'
import { createContainer } from './helpers'
import type { MouseEventHandler } from 'react'
import { ModalProps } from './types'
import classes from './UniversalModal.module.scss'

const MODAL_CONTAINER_ID = 'modal-container-id'

const UniversalModal:FC<ModalProps> = (props) => {
    const { onClose, title, children } = props
    const rootRef = useRef<HTMLDivElement>(null)
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID })
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleWrapperClick = (event: MouseEvent) => {
            const { target } = event
            if (target instanceof Node && rootRef.current === target) {
                onClose?.()
            }
        }
        window.addEventListener("click", handleWrapperClick)
        return () => {
            window.removeEventListener("click", handleWrapperClick)
        }
    }, [onClose])
    
    
    const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = 
        useCallback(() => {
            onClose?.()
        }, [onClose])

	return (
		<>
            {isMounted && (   
                <Portal id={MODAL_CONTAINER_ID}>
                    <div className={classes.modalWrapper} ref={rootRef}>
                        <div className={classes.modalContent}>
                            <button className={classes.modalBtnClose}
                                onClick={handleClose}
                            >
                                x
                            </button>
                            <h2 className={classes.modalTitle}>{title}</h2>
                            {children}
                        </div>
                    </div>
                </Portal>       
            )}
		</>
	)
}

export default UniversalModal