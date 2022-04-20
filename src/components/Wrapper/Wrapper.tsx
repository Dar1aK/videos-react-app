import React, { FC } from 'react'

import styles from './Wrapper.module.css'

const Wrapper: FC = ({ children }) => (<div className={styles.wrap}>
  {children}
</div>)

export default Wrapper;