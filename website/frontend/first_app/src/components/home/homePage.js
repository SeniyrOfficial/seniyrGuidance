import React from 'react'
import direction from './direction'
import guidance from './guidance'

const homePage = () => {
    return(
        <>
            <direction>
                Are you looking for a direction?
            </direction>
            <guidance>
                Or do you already have it, but don't know how to take it?
            </guidance>
        </>
    )
}

export default homePage