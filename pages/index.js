import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import mypic from '../public/jiji.webp';

export default function Home() {
  return (
    <div className='wrapper'>
      <div className='left'>
        <div className='picture'>
          <Image src={mypic}
          alt="jiji"
          />
        </div>
        <div className='nameRole'>
          <div className='name'>Oyungerel Jargalsaikhan</div>
          <div className='role'>Role</div>
        </div>
        <div className='contactWrapper'>
          <div className='title'>Contact</div>
          <div className='contact'>
            <ul>
             <li>
               <div className='liWrap'>
                 <div className='icon'><BsFillTelephoneFill /></div>
                 <div className='text'>+976 94141984</div>
               </div>
             </li>
             <li>
               <div className='liWrap'>
                 <div className='icon'><MdEmail /></div>
                 <div className='text'>lizzbetgrant1009@gmail.com</div>
               </div>
             </li>
             <li>
               <div className='liWrap'>
                 <div className='icon'><AiFillHome /></div>
                 <div className='text'>New York, Manhattan, 14th street</div>
               </div>
             </li>
           </ul>
          </div>
        </div>
        <div className='profileWrapper'>
          <div className='title'>Profile</div>
          <div className='cont'>A passionate, hardworking, and highly organised graphic designer, who always aims to achieve the best results with a practical get the things done approach. </div>
        </div>
      </div>
      <div className='right'>
        <div className='expWrapper'>
          <div className='title'>Work Experience</div>
          <div className='experience'>
            <ul>
              <li>
                <div className='liWrap'>
                  <div className='liTitle'>Front-End developer</div>
                  <div className='nameDate'>
                    <div className='name'>Microsoft</div> 
                    <div className='line'>|</div>
                    <div className='date'>2022-2024</div>
                  </div>
                  <div className='cont'>Awarded for Best employee of the year 2023. Quitted because of career change.</div>
                </div>
              </li>
              <li>
                <div className='liWrap'>
                  <div className='liTitle'>Graphic designer</div>
                  <div className='nameDate'>
                    <div className='name'>Facebook</div> 
                    <div className='line'>|</div>
                    <div className='date'>since 2024</div>
                  </div>
                  <div className='cont'>Building Horizon Worlds project with the best team in Facebook.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='eduWrapper'>
          <div className='title'>Education</div>
          <div className='education'>
            <ul>
              <li>
                <div className='liWrap'>
                  <div className='liTitle'>High school education</div>
                  <div className='nameDate'>
                    <div className='name'>GAA first school</div> 
                    <div className='line'>|</div>
                    <div className='date'>2008-2020</div>
                  </div>
                  <div className='cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </li>
              <li>
                <div className='liWrap'>
                  <div className='liTitle'>Bachelor degree in software engineering</div>
                  <div className='nameDate'>
                    <div className='name'>NUM</div> 
                    <div className='line'>|</div>
                    <div className='date'>2020-2023</div>
                  </div>
                  <div className='cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </li>
              <li>
                <div className='liWrap'>
                  <div className='liTitle'>Master degree in computer science</div>
                  <div className='nameDate'>
                    <div className='name'>MIT</div> 
                    <div className='line'>|</div>
                    <div className='date'>2023-2026</div>
                  </div>
                  <div className='cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='lanWrapper'>
          <div className='title'>Languages</div>
          <div className='languages'>
            <ul>
              <li>
                <div className='lanWrap'>
                  <div className='lan'>Mongolian</div>
                  <div className='line'>-</div>
                  <div className='lanLevel'>Native</div>
                </div>
              </li>
              <li>
                <div className='lanWrap'>
                  <div className='lan'>English</div>
                  <div className='line'>-</div>
                  <div className='lanLevel'>Advanced</div>
                </div>
              </li>
              <li>
                <div className='lanWrap'>
                  <div className='lan'>Japanese</div>
                  <div className='line'>-</div>
                  <div className='lanLevel'>Basic</div>
                </div>
              </li>
              <li>
                <div className='lanWrap'>
                  <div className='lan'>French</div>
                  <div className='line'>-</div>
                  <div className='lanLevel'>Basic</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
