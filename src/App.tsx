import './App.css';
import ImageOne from './assets/component-01/Image-01@2x.jpg'
import ImageTwo from './assets/component-01/Image-02@2x.jpg';
import ImageThree from './assets/component-01/Image-03@2x.jpg';
import ImageFour from './assets/component-02/Image-01@2x.jpg';
import ImageFive from './assets/component-02/Image-02@2x.jpg';
import ImageSix from './assets/component-02/Image-03@2x.jpg';

type TLatestCard = {
  title: string;
  description: string;
  image: string;
};

const LatestCard = ({
  title,
  description,
  image
}: TLatestCard) => {
  return (
    <div>
      <img src={image} className='flex-1' alt='imageone' />
      <div className='bg-red-600 h-1' />
      <p className='text-white text-lg mt-7 mb-3'>{title}</p>
      <p className='text-gray-500 font-light'>{description}</p>
      <div className='my-7'>
        <p className='text-white'>READ MORE</p>
        <div className='h-0.5 w-[90px] bg-red-700' />
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className='min-[320px]:p-[20px] sm:p-[50px] md:pt-[100px] lg:pt-[150px]'>
        <div className='md:flex md:flex-row md:justify-center md:items-start md:gap-x-5'>
          <div className='md:w-[400px] min-[320px]:mb-5'>
            <img src={ImageOne} className='flex-1' alt='imageone' />
          </div>
          <div className='md:w-[400px] md:flex md:flex-col md:gap-y-5'>
            <div className='min-[320px]:mb-5'>
              <img src={ImageTwo} className='flex-1' alt='imageone' />
            </div>
            <div className='min-[320px]:mb-4'>
              <img src={ImageThree} className='flex-1' alt='imageone' />
            </div>
          </div>
          <div className='md:w-[400px]'>
            <p className='text-white text-2xl font-light'>ANSWER YOUR BODY'S NEEDS</p>
            <div className='h-0.5 bg-white my-4' />
            <p className='text-white text-xl font-extralight'>
              The way ingredients are sourced affects the way we nourish our bodies.
              Author Mark Schatzer believes our body naturally develops an appetite
              for the foods and nutrients it needs to be healthy, but that artificial
              flavourings are getting in the way. This can be reversed by focusing on
              high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.
            </p>
            <p className='text-red-600 font-bold text-sm md:mt-[75px] min-[320px]:mt-[45px] md:mb-[20px] min-[320px]:mb-[20px]'>BE MINDFUL</p>
            <p className='text-white text-xl font-medium'>
              Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.
            </p>
          </div>
        </div>
      </div>
      <div className='min-[320px]:p-[20px] sm:p-[50px] md:pt-[100px] lg:pt-[150px]'>
        <p className='min-[320px]:text-2xl md:text-4xl font-extralight text-white text-center'>ALL THE LATEST FROM AEG</p>
        <div className="md:flex md:flex-row md:items-start md:justify-center md:gap-x-5 md:mt-[60px] min-[320px]:my-[60px]">
          <div className='md:w-[400px]'>
            <LatestCard
              title='Summer Lunch Menu By Mark Best'
              description="AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
              image={ImageFour}
            />
          </div>
          <div className='md:w-[400px]'>
            <LatestCard
              title='A Traditional Christmas Eve, Mark Best Style'
              description="One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests."
              image={ImageFive}
            />
          </div>
          <div className='md:w-[400px]'>
            <LatestCard
              title='Taking Taste Further'
              description="This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food."
              image={ImageSix}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
