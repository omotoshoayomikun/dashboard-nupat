import React from 'react';
import styles from '../../styles/Forms/Card.module.css'
import Progress from './Progress';
import member from '/imgs/member.png'

export const Card = (props) => {

    const members = [
        member,
        member,
        member,
    ]

    return (
        <>
            <div className={`mb-16 ${styles.card}`}>
                {
                    props.image && (
                        <img src={props.image} alt="" />
                    )
                }
                <div className={`df jc-sb ${props.image? 'mt-18' : ''} `}>
                    <h4 className={styles.txt1} style={{ alignSelf: 'flex-start' }}>{props.title}</h4>
                    <div className={styles.dot}>
                        <img src="/icons/dot.svg" alt="" />
                    </div>
                </div>
                <div className={`mt-8 ${styles.txt2}`}>Make clear design and color</div>
                <div>
                    <div className="df jc-sb mt-18">
                        <div className='df'>
                            <div className={styles.mil}>
                                <img src="/icons/Clist.svg" alt="" />
                            </div>
                            <span className={styles.txt2}>Progress</span>
                        </div>
                        <div className={styles.txt4}>2/10</div>
                    </div>
                    <div>
                        <Progress {...props.progress} />
                    </div>

                    <div className="df jc-sb ai-c">
                        <div>
                            <div className="df">
                                <div className={styles.basq}>
                                    <img src="/icons/comment.svg" alt="" className={styles.mil} />
                                    <span className={styles.txt3}>7</span>
                                </div>
                                <div className={styles.basq}>
                                    <img src="/icons/tag.svg" alt="" className={styles.mil} />
                                    <span className={styles.txt3}>2</span>
                                </div>
                            </div>
                        </div>
                        <div className="df ai-c p-r">
                            {
                                members.map((member, i) => (
                                    <div key={i} className={styles.img_cont}><img src={member} alt="" style={{ width: '24px', height: '24px' }} /></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const SubCard = (props) => {
    return (
        <>
            <div className={styles.todo}>
                <span>{props.title}</span>
                <div className={styles.badge}>{props.num}</div>
            </div>
        </>
    )
}