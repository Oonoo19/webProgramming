import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

export default function Home() {
  return (
    <div className='wrapper'>
      <div className='left'>
        <div className='picture'>
          <img src="jiji.webp"></img>
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
          <div className='cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
      </div>
      <div className='right'>
        <div className='expWrapper'>
          <div className='title'>Work Experience</div>
          <div className='experience'>
            <ul>
              <li>
                <div className='liWrap'>
                  <div className='liTitle'>Role</div>
                  <div className='nameDate'>
                    <div className='name'>Work Title</div> 
                    <div className='line'>|</div>
                    <div className='date'>Year-Year</div>
                  </div>
                  <div className='cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
              </li>
              <li>
                <div className='liWrap'>
                  <div className='liTitle'>Role</div>
                  <div className='nameDate'>
                    <div className='name'>Work Title</div> 
                    <div className='line'>|</div>
                    <div className='date'>Year-Year</div>
                  </div>
                  <div className='cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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
                  <div className='liTitle'>Degree</div>
                  <div className='nameDate'>
                    <div className='name'>University Name</div> 
                    <div className='line'>|</div>
                    <div className='date'>Year-Year</div>
                  </div>
                  <div className='cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
              </li>
              <li>
                <div className='liWrap'>
                  <div className='liTitle'>Degree</div>
                  <div className='nameDate'>
                    <div className='name'>University Name</div> 
                    <div className='line'>|</div>
                    <div className='date'>Year-Year</div>
                  </div>
                  <div className='cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
              </li>
              <li>
                <div className='liWrap'>
                  <div className='liTitle'>Degree</div>
                  <div className='nameDate'>
                    <div className='name'>University Name</div> 
                    <div className='line'>|</div>
                    <div className='date'>Year-Year</div>
                  </div>
                  <div className='cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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
