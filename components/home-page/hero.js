import Image from "next/image"
import classes from './hero.module.css'

function Hero(){
    return (
        <section>
            <div className={classes.hero}>
                <div className={classes.image}>
                    <Image 
                    src='/images/site/icon.png'
                    alt='An image showing Marxu'
                    width={300}
                    height={300}
                    />
                </div>
                <h1>Hi, I am Marxu</h1>
                <p>
                    I want to write blogs
                </p>
            </div>
        </section>
    )
}

export default Hero