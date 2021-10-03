import React from 'react'
import classes from "./Footer.module.css"

function footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.center}>
                <p>Made with ❤️ by <a href="https://github.com/omkar342" target="_blank">Omkar.</a></p>
            </div>
        </div>
    )
}

export default footer
