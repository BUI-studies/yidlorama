import { FC, ReactNode, SetStateAction, Dispatch } from 'react'
import { CloseBtn } from './CloseBtn'
import classes from './UniversalModal.module.scss'

type ModalProps = {
    children: ReactNode
    title: string
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}

const UniversalModal:FC<ModalProps> = ({ children, title, visible, setVisible  }) => {

    const rootClasses: string[] = [classes.modal, visible ? classes.active : '']
    
	return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.modalBtnClose} onClick={() => setVisible(false)}>
                    {CloseBtn.closeIcon}
                </div>
                <h2 className={classes.modalTitle}>
                    {title}
                </h2>
                {children}
            </div>
        </div>
	)
}

export default UniversalModal