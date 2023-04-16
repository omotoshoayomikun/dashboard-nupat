import React from 'react'
import styles from '../styles/Dashboard.module.css';
import { BtnAdd, BtnBlack } from './Forms/button';
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

  const subCard = [
    {title:'To Do', num:'3'},
    {title:'Inprogress', num:'1'},
    {title:'Completed', num:'2'},
  ]

  return (
    <>
      <div className={styles.container}>
        <section className={styles.top_section}>
          <section className='df jc-sb ai-c mb-57'>
            <div>
              <div className={styles.txt1}>New Campaign Run </div>
              <div className={` ${styles.txt2}`}>A new campaign launch work for brand new featur in May month</div>
            </div>
            <div>
              <BtnBlack text='ADD MEMBERS' />
            </div>
          </section>

          <section className='df jc-sb ai-c'>
            <div className="df ai-c">
              <div className="df ai-c p-r">
                {
                  members.map((member, i) => (
                    <div key={i} className={styles.img_cont}><img src={member} alt="" /></div>
                  ))
                }
              </div>
              <div className={styles.txt2}>8 member</div>

            </div>
            <div className="df ai-c">
              {
                navs.map((nav, i) => (
                  <div key={i} className={styles.cont_list}>
                    <img src={nav.icon} alt='' />
                    <span>{nav.text}</span>
                  </div>
                ))
              }
            </div>
          </section>
        </section>

        <section className={styles.main_section}>
          <div className="df gap-40">
            {
              subCard.map((sub, i) => (
                <div key={i} className="flex-1"><SubCard {...sub} /></div>
              ))
            }
          </div>

          <div className="df gap-40">
            <div className='flex-1'>
              <Card image='/imgs/card_image1.png' title='Highfidelity Design' progress={{perc: '0', color: ''}} />
              <Card title='Usability testing' progress={{perc: '0', color: ''}}/>
              <BtnAdd text='Add Task' icon='/icons/add.svg' />
            </div>
            <div className='flex-1'>
              <Card image='/imgs/card_image2.png'  title='Highfidelity Design' progress={{perc: '70%', color: '#FF5F37'}} />
              <BtnAdd text='Add Task' icon='/icons/add.svg' />
            </div>
            <div className='flex-1'>
              <Card title='Usability testing' progress={{perc: '100%', color: '#8BC488'}} />
              <Card image='/imgs/card_image3.png' title='Highfidelity Design' progress={{perc: '100%', color: '#8BC488'}}  />
              <BtnAdd text='Add Task' icon='/icons/add.svg' />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard