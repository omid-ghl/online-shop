import { useSelector } from 'react-redux';
import { IProduct } from '../../lib/types/products';
import CarouselBox from '../UI/CarouselBox/CarouselBox';
import CarouselBoxCard from '../UI/CarouselBox/CarouselBoxCard';

const Offers = () => {
  const OfferProducts = useSelector((state: any) => state.specialOfferProductsList.specialOfferProducts);

  return (
    <div className="md:mt-10 w-full xl:max-w-[2100px] mx-auto ">
      <CarouselBox title="offers" className="bg-offersBG flex-row" href="/">
        {[
          ...OfferProducts,
          ...OfferProducts,
          ...OfferProducts,
          ...OfferProducts,
          ...OfferProducts,
          ...OfferProducts,
          ...OfferProducts,
          ...OfferProducts,
          ...OfferProducts,
          ...OfferProducts,
        ]
          .slice(0, 10)
          .map((product: IProduct) => {
            return (
              <>
                <CarouselBoxCard key={product.name} product={product} />
              </>
            );
          })}
      </CarouselBox>
    </div>
  );
};

export default Offers;
