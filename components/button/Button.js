import styles from './Button.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            btnActive: false
        }
        this.btnRef = React.createRef()
    }
    clickBtn = () => {
        this.props.onBtnClick && this.props.onBtnClick()
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
        const { children, color, background, shape } = this.props
        const { btnActive } = this.state
        const _color = color || '#101820'
        return (
            <div ref={this.btnRef}
                onClick={this.clickBtn.bind(this)}
                className={[styles.MButtonWrapper, btnActive ? styles.active : '', shape === 'rectangular' ? styles.rectangular : ''].join(' ')}
                style={{
                    color: _color,
                    background: background || '#F7F7F7',
                    border: `1px solid ${_color}`,
                    fontSize: '14px'
                }}>{children}</div>
        )
    }
}

Button.propTypes = {
    onBtnClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    color: PropTypes.string,
    background: PropTypes.string,
    shape: PropTypes.oneOf(['default', 'rectangular'])
}