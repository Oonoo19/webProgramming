import Image from 'next/image'
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import mypic from '../public/Jiji.webp';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.picture}>
        </div>
        <div className={styles.nameRole}>
          <div className={styles.name}>Oyungerel Jargalsaikhan</div>
          <div className={styles.role}>Role</div>
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.title}>Contact</div>
          <div className={styles.contact}>
            <ul>
             <li>
               <div className={styles.liWrap}>
                 <div className={styles.icon}><BsFillTelephoneFill /></div>
                 <div className={styles.text}>+976 94141984</div>
               </div>
             </li>
             <li>
               <div className={styles.liWrap}>
                 <div className={styles.icon}><MdEmail /></div>
                 <div className={styles.text}>lizzbetgrant1009@gmail.com</div>
               </div>
             </li>
             <li>
               <div className={styles.liWrap}>
                 <div className={styles.icon}><AiFillHome /></div>
                 <div className={styles.text}>New York, Manhattan, 14th street</div>
               </div>
             </li>
           </ul>
          </div>
        </div>
        <div className={styles.profileWrapper}>
          <div className={styles.title}>Profile</div>
          <div className={styles.cont}>A passionate, hardworking, and highly organised graphic designer, who always aims to achieve the best results with a practical get the things done approach. </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.expWrapper}>
          <div className={styles.title}>Work Experience</div>
          <div className={styles.experience}>
            <ul>
              <li>
                <div className={styles.liWrap}>
                  <div className={styles.liTitle}>Front-End developer</div>
                  <div className={styles.nameDate}>
                    <div className={styles.name}>Microsoft</div> 
                    <div className={styles.line}>|</div>
                    <div className={styles.date}>2022-2024</div>
                  </div>
                  <div className={styles.cont}>Awarded for Best employee of the year 2023. Quitted because of career change.</div>
                </div>
              </li>
              <li>
                <div className={styles.liWrap}>
                  <div className={styles.liTitle}>Graphic designer</div>
                  <div className={styles.nameDate}>
                    <div className={styles.name}>Facebook</div> 
                    <div className={styles.line}>|</div>
                    <div className={styles.date}>since 2024</div>
                  </div>
                  <div className={styles.cont}>Building Horizon Worlds project with the best team in Facebook.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.eduWrapper}>
          <div className={styles.title}>Education</div>
          <div className={styles.education}>
            <ul>
              <li>
                <div className={styles.liWrap}>
                  <div className={styles.liTitle}>High school education</div>
                  <div className={styles.nameDate}>
                    <div className={styles.name}>GAA first school</div> 
                    <div className={styles.line}>|</div>
                    <div className={styles.date}>2008-2020</div>
                  </div>
                  <div className={styles.cont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </li>
              <li>
                <div className={styles.liWrap}>
                  <div className={styles.liTitle}>Bachelor degree in software engineering</div>
                  <div className={styles.nameDate}>
                    <div className={styles.name}>NUM</div> 
                    <div className={styles.line}>|</div>
                    <div className={styles.date}>2020-2023</div>
                  </div>
                  <div className={styles.cont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </li>
              <li>
                <div className={styles.liWrap}>
                  <div className={styles.liTitle}>Master degree in computer science</div>
                  <div className={styles.nameDate}>
                    <div className={styles.name}>MIT</div> 
                    <div className={styles.line}>|</div>
                    <div className={styles.date}>2023-2026</div>
                  </div>
                  <div className={styles.cont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.lanWrapper}>
          <div className={styles.title}>Languages</div>
          <div className={styles.languages}>
            <ul>
              <li>
                <div className={styles.lanWrap}>
                  <div className={styles.lan}>Mongolian</div>
                  <div className={styles.line}>-</div>
                  <div className={styles.lanLevel}>Native</div>
                </div>
              </li>
              <li>
                <div className={styles.lanWrap}>
                  <div className={styles.lan}>English</div>
                  <div className={styles.line}>-</div>
                  <div className={styles.lanLevel}>Advanced</div>
                </div>
              </li>
              <li>
                <div className={styles.lanWrap}>
                  <div className={styles.lan}>Japanese</div>
                  <div className={styles.line}>-</div>
                  <div className={styles.lanLevel}>Basic</div>
                </div>
              </li>
              <li>
                <div className={styles.lanWrap}>
                  <div className={styles.lan}>French</div>
                  <div className={styles.line}>-</div>
                  <div className={styles.lanLevel}>Basic</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
