import Hero from '../components/sections/hero/hero';
import Product from '../components/sections/products/products';
import ProductsCarausel from '../components/sections/products/productsCarousel';
import Services from '../components/sections/services/services';
import ServicesGallery from '../components/sections/services/servicesGallery';
import Idea from '../components/sections/idea/idea';
import CaseStudies from '../components/sections/caseStudies/caseStudies';
import Partners from '../components/sections/partners/partners';
import PodCasts from '../components/sections/podCasts/podCasts';
import NewsAndUpdates from '../components/sections/newsAndUpdates/newsAndUpdates';
import Careers from '../components/sections/careers/careers';


export default function Home() {
  return (
    <main className='bg-gray-500'>
      <Hero />
      <Product />
      <ProductsCarausel />
      <Services />
      <ServicesGallery/>
      <Idea/>
      <CaseStudies/>  
      <Partners/>
      <PodCasts/>
      <NewsAndUpdates/>
      <Careers/>
    </main>
  );
}
