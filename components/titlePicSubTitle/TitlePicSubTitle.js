import React from 'react'
import styles from './TitlePicSubTitle.module.scss'
import Image from 'next/image'

export default class TitlePicSubTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: {
                text: 'FETAQ社区',
                color: '#101820',
                fontSize: '20px',
                fontWeight: 'bold'
            },
            picLists: [
                {
                    pic: {
                        url: '/c1.png'
                    },
                    subTitle: {
                        text: 'FETAQ上海社区夜跑活动',
                        color: '#101820',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }
                },
                {
                    pic: {
                        url: '/c1.png'
                    },
                    subTitle: {
                        text: 'FETAQ上海社区夜跑活动',
                        color: '#101820',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }
                },
                {
                    pic: {
                        url: '/c1.png'
                    },
                    subTitle: {
                        text: 'FETAQ上海社区夜跑活动',
                        color: '#101820',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }
                },
                {
                    pic: {
                        url: '/c1.png'
                    },
                    subTitle: {
                        text: 'FETAQ上海社区夜跑活动',
                        color: '#101820',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }
                }
            ],
            background: '#ffffff'
        }
    }
    clickSubTitle() {
        //
    }

    render() {
        let { title, picLists, background } = this.state
        return (
            <div style={{ background }} className={styles.MTitlePicSubTitle}>
                <div
                    className='textC mb40'
                    style={{ color: title.color, fontSize: title.fontSize, fontWeight: title.fontWeight }}>
                    {title.text}
                </div>
                {
                    picLists.map((item, index) => {
                        return (
                            <div key={index}>
                                <img style={{ width: '100%' }} src={item.pic.url} />
                                <div className='flexC mt6 mb30' onClick={this.clickSubTitle.bind(this)}>
                                    <span
                                        className='mr16'
                                        style={{
                                            color: item.subTitle.color || '#101820',
                                            fontSize: item.subTitle.fontSize || '14px',
                                            fontWeight: item.subTitle.fontWeight || 'bold'
                                        }}>{item.subTitle.text}</span>
                                    <Image src='/arrow-right.svg' width={6} height={10} />
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}