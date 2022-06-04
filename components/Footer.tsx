import * as React from 'react'
import { FaRss } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'

import { useDarkMode } from 'lib/use-dark-mode'
import * as config from 'lib/config'
import { host } from 'lib/config'



import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2021-2022 {config.author}
      </div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>



      <div className="styles_powerby__nwSPg">
        <div className={styles.copyright}>Powered by&nbsp;<a href="http://transitivebullsh.it" title="Visit him" >transitive-bullshit</a></div>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
