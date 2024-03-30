import { Helmet } from "react-helmet-async";
import FeatureJobs from "../../Components/FeatureJobs/FeatureJobs";
import Hero from "../../Components/Hero/Hero";
import JobCategoryies from "../../Components/JobCategories/JobCategoryies";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Hero />
            <JobCategoryies />
            <FeatureJobs />
        </div>  
    );
};

export default Home;