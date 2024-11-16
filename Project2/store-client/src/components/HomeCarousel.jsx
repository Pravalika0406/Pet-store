import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img className="h-[50vh] object-cover" src="https://wallpapers.com/images/hd/beautiful-dog-pictures-1920-x-1200-0kbowtl23b3i5iu7.jpg" />
          {/* <p className="legend">Pet Dogs</p> */}

          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-0 sm:p-2 sm:pb-1">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-2xl">
                    Pet Dogs
                  </h2>
                </div>
                <div className="mt-2">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-green-600">
                      20%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[50vh] object-cover" src="https://cats.com/wp-content/uploads/2022/12/group-of-cats-compressed.jpg" />
          {/* <p className="legend">Pet Cats</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-2 sm:pb-2">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-2xl">
                    Pet Cats
                  </h2>
                </div>
                <div className="mt-2">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-blue-600">
                      40%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[50vh] object-cover" src="https://static.wixstatic.com/media/c1056b_80d2789823d041efb4d3b0563ba37e36~mv2.jpg/v1/fill/w_800,h_462,al_c,q_85/c1056b_80d2789823d041efb4d3b0563ba37e36~mv2.jpg" />
          {/* <p className="legend">Rabbits</p> */}
          <div className="absolute left-1 bottom-1 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-2 sm:pb-2">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-2xl">
                    Rabbits
                  </h2>
                </div>
                <div className="mt-2">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-purple-600">
                      50%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Carousel>

    </>
  )
}

export default HomeCarousel