import React from 'react'

export default class PicWithContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pic: {
                url: '/banner1.png'
            },
            content: {
                text: [
                    'FETAQ期冀赋能每一位大众运动者，通过兼具科技、性能和设计的运动产品，让运动表现接近每一个普通人的生活。',
                    'FETAQ 名字为 “free exploration to all quests”的缩写，这是FETAQ对运动者的承诺——从用户真实诉求出发，自由探索一切可能。',
                    'FETAQ鼓励每一位运动者追求卓越的生命表现力。不局限于提升运动表现，强调在运动中构建身体与心智的连接，保持自我清醒与觉知，激发生命活力。',
                    'FETAQ鼓励每一位运动者追求卓越的生命表现力。不局限于提升运动表现，强调在运动中构建身体与心智的连接，保持自我清醒与觉知，激发生命活力。'
                ],
                color: '#101820',
                fontSize: '14px',
                fontWeight: 400
            },
            background: '#ffffff'
        }
    }

    render() {
        let { pic, content } = this.state
        return (
            <div>
                <img src={pic.url} style={{ width: '100%' }} />
                <div className='pr30 pl30 pt18 pb40 textC'>
                    {
                        content.text.map((item, index) => {
                            return (
                                <div key={index}
                                    style={{
                                        lineHeight: '25px',
                                        color: content.color || '#101820',
                                        fontSize: content.fontSize || '14px',
                                        fontWeight: content.fontWeight || 400
                                    }}>{item}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}