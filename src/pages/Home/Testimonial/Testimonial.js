import React from 'react';
import Review from './Review';
import quote from '../../../img/quote.svg';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1, 
            name: 'John Doe',
            img: 'https://i.ibb.co/FbnhGLZ/speaker-3.jpg',
            review: 'This site definitely  appeals to the average person because the layout is so  simple  but very  VERY  effective.  It is a clean  site  with a flawless  look, and someone  without any  technical  background  would definitely  appreciate  it.',
            location: 'Toronto'
        },
        {
            _id: 2, 
            name: 'John Herry',
            img: 'https://i.ibb.co/GHm4Dsq/images-q-tbn-ANd9-Gc-SPn-E-fy9l-LMRP5-DLYLn-GN0-LRLz-ZOi-Ep-Mr-U4g-usqp-CAU.jpg',
            review: 'This site definitely  appeals to the average person because the layout is so  simple  but very  VERY  effective.  It is a clean  site  with a flawless  look, and someone  without any  technical  background  would definitely  appreciate  it.',
            location: 'Manitoba'
        },
        {
            _id: 3, 
            name: 'Ms.Samira',
            img: 'https://i.ibb.co/xqWSjQq/speaker-2-v2.jpg',
            review: 'This site definitely  appeals to the average person because the layout is so  simple  but very  VERY  effective.  It is a clean  site  with a flawless  look, and someone  without any  technical  background  would definitely  appreciate  it.',
            location: 'Ottawa'
        },
    ]
    return (
        <section className='my-16'>
        <div className='flex justify-between'>
            <div className='mx-auto'>
                <h4 className="text-4xl text-orange-600 font-bold lg:text-center">Reviews</h4>
                <h2 className="text-3xl mt-1">What Our Clients Says</h2>
            </div>
            <figure>
                <img className='w-24 lg:w-48' src={quote} alt="" />
            </figure>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map(review =><Review
                    key={review._id}
                    review={review}
                >
                </Review>)
            }
        </div>
    </section>
    );
};

export default Testimonial;