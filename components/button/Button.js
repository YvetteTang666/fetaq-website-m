import styles from './Button.module.scss'
import React from 'react'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            btnActive: false
        }
        this.btnRef = React.createRef()
    }
    clickBtn = () => {
        this.props.onBtnClick()
    }
    endFn = () => {
        this.setState({
            btnActive: false
        })
    }

    componentDidMount() {
        let isSupportTouch = 'ontouchstart' in window
        if (this.btnRef?.current) {
            this.btnRef.current.addEventListener(isSupportTouch ? 'touchstart' : 'mousedown', () => {
                if (this.props.disabled) return
                this.setState({
                    btnActive: true
                })
                if (!isSupportTouch) {
                    this.btnRef.current.addEventListener('mouseup', this.endFn)
                } else {
                    this.btnRef.current.addEventListener('touchend', this.endFn);
                    this.btnRef.current.addEventListener('touchcancel', this.endFn);
                }
            })
        }
    }

    render() {
        const { children, color, background } = this.props
        const { btnActive } = this.state
        return (
            <div ref={this.btnRef}
                onClick={this.clickBtn.bind(this)} className={[styles.MButtonWrapper, btnActive ? styles.active : ''].join(' ')}
                style={{
                    color,
                    background: background || '#F7F7F7',
                    border: `1px solid ${color}`,
                    fontSize: '14px'
                }}>{children}</div>
        )
    }
}