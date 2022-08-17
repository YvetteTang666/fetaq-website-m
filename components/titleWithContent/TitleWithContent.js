import React from 'react'
import styles from './TitleWithContent.module.scss'

export default class TitleWidthContent extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            title: {
                text: 'WHO WE ARE',
                color: '#101820',
                fontSize: '20px',
                fontWeight: 'bold'
            },
            content: {
                text: `FETAQ期冀赋能每一位大众运动者，通过兼具科技、性能和设计的运动产品，让运动表现接近每一个普通人的生活。<br>
                FETAQ 名字为 “free exploration to all quests”的缩写，这是FETAQ对运动者的承诺——从用户真实诉求出发，自由探索一切可能。<br>
                FETAQ鼓励每一位运动者追求卓越的生命表现力。不局限于提升运动表现，强调在运动中构建身体与心智的连接，保持自我清醒与觉知，激发生命活力。<br>
                FETAQ鼓励每一位运动者追求卓越的生命表现力。不局限于提升运动表现，强调在运动中构建身体与心智的连接，保持自我清醒与觉知，激发生命活力。
                `,
                color: '#101820',
                fontSize: '14px',
                fontWeight: '400'
            },
            background: '#ffffff'
        }
    }

    render() {
        let { background, title, content } = this.state
        console.log(this.state.title)
        return (
            <div className={styles.MTitleWithContent} style={{ background }}>
                <div className={styles.MTWCTitle}
                    style={{ color: title.color, fontSize: title.fontSize, fontWeight: title.fontWeight }}>
                    {title.text}
                </div>
                <div className={styles.MTWCContent}
                    style={{ color: content.color, fontSize: content.fontSize, fontWeight: content.fontWeight }}
                    dangerouslySetInnerHTML={{ __html: content.text }} />
            </div>
        )
    }
}