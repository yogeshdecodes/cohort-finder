import { Featured } from "../components/Featured"
import { Hero } from "../components/Hero"

export const Home = () => {
    return(
        <>  
            <Hero/>

            <Featured heading="Trending Cohorts"/>

            <Featured heading="Featured Cohorts"/>

        </>
    ); 
}