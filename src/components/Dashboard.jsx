import React from 'react'
import styles from '../styles/Dashboard.module.css';
import { BtnAdd, BtnBlack } from './Forms/Button';
import member from '/imgs/member.png'
import { Card, SubCard } from './Forms/Card';
function Dashboard() {

  const members = [
    member,
    member,
    member,
  ]

  const navs = [
    {
      icon: '/icons/users_.svg',
      text: 'Participants View'
    },
    {
      icon: '/icons/pause.svg',
      text: 'Board View'
    },
    {
      icon: '/icons/list.svg',
      text: 'List View'
    },
    {
      icon: '/icons/light_.svg',
      text: 'Power View'
    },
    {
      icon: '/icons/plus_.svg',
      text: ''
    },
  ]

  return (
    <>
      <div className={styles.container}>
        <section className={styles.top_section}>
          <section className='df jc-sb ai-c fw-w mb-[47px]'>
            <div>
              <div className={`mb-[10px] ${styles.txt1}`}>New Campaign Run </div>
              <div className={`mb-[10px] ${styles.txt2}`}>A new campaign launch work for brand new featur in May month</div>
            </div>
            <div>
              <BtnBlack text='ADD MEMBERS' />
            </div>
          </section>

          <section className='df jc-sb ai-c fw-w '>
            <div className="df ai-c mb-[10px]">
              <div className="df ai-c p-r fw-w ">
                {
                  members.map((member, i) => (
                    <div key={i} className={styles.img_cont}><img src={member} alt="" /></div>
                  ))
                }
              </div>
              <div className={styles.txt2}>8 member</div>

            </div>
            <div className="df ai-c fw-w mb-[10px] ">
              {
                navs.map((nav, i) => (
                  <a href='#' key={i} className={styles.cont_list}>
                    <img src={nav.icon} alt='' />
                    <span>{nav.text}</span>
                  </a>
                ))
              }
            </div>
          </section>
        </section>

        <section className={styles.main_section}>
          <div className={styles.flexbn}>
            <div className={styles.flexes}>
              <SubCard data={{ title: 'To Do', num: '3' }} />
              <Card image='/imgs/card_image1.png' title='Highfidelity Design' progress={{ perc: '0', color: '' }} />
              <Card title='Usability testing' progress={{ perc: '0', color: '' }} />
              <BtnAdd text='Add Task' icon='/icons/add.svg' />
            </div>
            <div className={styles.flexes}>
              <SubCard data={{ title: 'Inprogress', num: '1' }} />
              <Card image='/imgs/card_image2.png' title='Highfidelity Design' progress={{ perc: '70%', color: '#FF5F37' }} />
              <BtnAdd text='Add Task' icon='/icons/add.svg' />
            </div>
            <div className={styles.flexes}>
              <SubCard data={{ title: 'Completed', num: '2' }} />
              <Card title='Usability testing' progress={{ perc: '100%', color: '#8BC488' }} />
              <Card image='/imgs/card_image3.png' title='Highfidelity Design' progress={{ perc: '100%', color: '#8BC488' }} />
              <BtnAdd text='Add Task' icon='/icons/add.svg' />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard