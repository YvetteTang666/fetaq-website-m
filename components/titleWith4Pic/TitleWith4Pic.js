import styles from './TitleWith4Pic.module.scss'
import React from 'react'
import Button from '../button/Button'
import Router from 'next/router'

export default class TitleWithTwoPic extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            title: {
                text: '明星产品',
                color: '#101820',
                fontSize: '20px',
                fontWeight: 'bold'
            },
            picLists: [
                {
                    title: {
                        text: 'FETAQ BLACK.1',
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    },
                    subTitle: {
                        text: 'FETAQFETAQFETAQ',
                        color: '#000000',
                        fontSize: '14px',
                        fontWeight: '500'
                    },
                    pic: {
                        url: '/banner2.png'
                    },
                    button: {
                        text: '查看详情',
                        color: '#101820',
                        background: '#F7F7F7'
                    },
                    background: '#F7F7F7'
                },
                {
                    title: {
                        text: 'FETAQ BLACK.2',
                        color: '#1890FF',
                        fontSize: '14px',
                        fontWeight: '500'
                    },
                    subTitle: {
                        text: 'FETAQFETAQFETAQ2',
                        color: '#000000',
                        fontSize: '12px',
                        fontWeight: 'bold'
                    },
                    pic: {
                        url: '/banner2.png'
                    },
                    button: {
                        text: '查看详情',
                        color: '#F7F7F7',
                        background: '#101820'
                    },
                    background: '#F0F0F0'
                },
                {
                    title: {
                        text: 'FETAQ BLACK.1',
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    },
                    subTitle: {
                        text: 'FETAQFETAQFETAQ',
                        color: '#000000',
                        fontSize: '14px',
                        fontWeight: '500'
                    },
                    pic: {
                        url: '/banner2.png'
                    },
                    button: {
                        text: '查看详情',
                        color: '#101820',
                        background: '#F7F7F7'
                    },
                    background: '#F7F7F7'
                },
                {
                    title: {
                        text: 'FETAQ BLACK.2',
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    },
                    subTitle: {
                        text: 'FETAQFETAQFETAQ2',
                        color: '#000000',
                        fontSize: '14px',
                        fontWeight: '500'
                    },
                    pic: {
                        url: '/banner2.png'
                    },
                    button: {
                        text: '查看详情',
                        color: '#F7F7F7',
                        background: '#101820'
                    },
                    background: '#F0F0F0'
                }
            ]
        }
    }

    btnClick(item) {
        // item
        Router.push({ pathname: '/product', query: {} })
    }

    render() {
        let { title, picLists } = this.state
        return (
            <div className={styles.MTitleWith4Pic}>
                <div
                    className={styles.MTitleWith4PicMainTitle}
                    style={{ color: title.color, fontSize: title.fontSize, fontWeight: title.fontWeight }}>
                    {title.text}
                </div>
                {
                    picLists.map((item, index) => {
                        return (
                            <div key={index} className={styles.MTitleWith4PicWrapper}
                                style={{ background: item.background }}>
                                <div className='textL mb10'
                                    style={{
                                        color: item.title.color || '#000000',
                                        fontSize: item.title.fontSize || '16px',
                                        fontWeight: item.title.fontWeight || 'bold'
                                    }}>{item.title.text}</div>
                                <div className='textL'
                                    style={{
                                        color: item.subTitle.color || '#000000',
                                        fontSize: item.subTitle.fontSize || '14px',
                                        fontWeight: item.subTitle.fontWeight || '500'
                                    }}>{item.subTitle.text}</div>
                                <div className={styles.MTitleWith4PicImage}>
                                    <img style={{ width: '100%' }} src={item.pic.url} />
                                </div>
                                <Button onBtnClick={() => { this.btnClick(item) }} background={item.button.background} color={item.button.color}>{item.button.text}</Button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}