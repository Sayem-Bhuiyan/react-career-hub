import PropTypes from "prop-types";

const CategoryCard = ({ categroy }) => {
  const { logo, category_name, availability } = categroy;
  return (
    <div className="h-[243px] w-[311px] bg-[#7E90FE]/5 rounded-lg text-left p-10">
      <div className='w-[70px] h-[70px] flex items-center justify-center rounded-sm mb-8 bg-gradient-to-r from-[#7E90FE]/10 to-[#9873FF]/10'>
        <img src={logo} alt="" />
      </div>
      <h2 className="text-[#474747] font-extrabold text-xl mb-2">{category_name}</h2>
      <p className="text-[#A3A3A3] text-base font-medium">{availability}</p>
    </div>
  );
};
CategoryCard.propTypes = {
  categroy: PropTypes.object,
};

export default CategoryCard;
