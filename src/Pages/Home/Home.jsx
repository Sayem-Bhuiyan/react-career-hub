import FeatureJobs from "../../Components/FeatureJobs/FeatureJobs";
import Hero from "../../Components/Hero/Hero";
import JobCategoryies from "../../Components/JobCategories/JobCategoryies";

const Home = () => {
    return (
        <div>
            <Hero />
            <JobCategoryies />
            <FeatureJobs />
        </div>  
    );
};

export default Home;