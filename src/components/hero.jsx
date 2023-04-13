

// object destructing to extract the 'title' and 'subtitle'  and 'children' props from the 'props' object 

import classNames from "classnames"

export const HeroTitle = ({children, className}) => {
    return <h1 className={classNames("my-6 text-5xl md:text=7xl", className)}>{children}</h1>
}

export const HeroSubtitle = ({ children, className }) => {
    return <p className={classNames("md:text-xl mb-12 text-lg text-primary-text", className)}>{children}</p>
}


export const Hero = ({ children }) => {
    return <div className="text-center">{children}</div>
    
}