import React from "react"
import styles from "./Footer.module.css"

// Khan Academy
const ADDRESS = "0x95a647B3d8a3F11176BAdB799b9499C671fa243a"

function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        Donation goes directly to
        <a
          href="https://khanacademy.org"
          target="__blank"
          className={styles.khan}
        >
          Khan Academy
        </a>
        <span role="img" aria-label="smiley">
          🙂
        </span>
      </div>
      <div className={styles.row}>
        <a href={`https://etherscan.io/address/${ADDRESS}`} target="__blank">
          {ADDRESS.slice(0, 6)}...{ADDRESS.slice(-6, -1)}
        </a>
      </div>
      <div className={styles.row}>
        <a href="mailto:contact@solidity-by-example.org">
          contact@solidity-by-example.org
        </a>
      </div>
      <div className={styles.row}>
        <a
          href="https://github.com/solidity-by-example/solidity-by-example.github.io"
          target="__blank"
        >
          source
        </a>
        <div className={styles.bar}>|</div>
        <a
          href="https://github.com/solidity-by-example/solidity-by-example.github.io/blob/gh-pages/LICENSE"
          target="__blank"
        >
          license
        </a>
      </div>
    </div>
  )
}

export default Footer
