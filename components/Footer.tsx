import * as React from 'react'
import { FaRss } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'
import { host } from 'lib/config'



import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer



export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
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
      <div className={styles.copyright}>Copyright 2021-2022 {config.author}</div>

      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title='Tottle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}



      <div className="styles_powerby__nwSPg">
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">知识共享署名 4.0 国际许可协议</a>进行许可。
        <div className={styles.copyright}>Powered by&nbsp;<a href="http://transitivebullsh.it" title="Visit him" >transitive-bullshit</a></div>
      </div>
    </footer>
  )
}
