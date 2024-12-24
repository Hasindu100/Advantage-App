import Hero from '../components/sections/hero/hero';
import Product from '../components/sections/products/products';
import Services from '../components/sections/services/services';
import Idea from '../components/sections/idea/idea';
import CaseStudies from '../components/sections/caseStudies/caseStudies';
import Partners from '../components/sections/partners/partners';
import PodCasts from '../components/sections/podCasts/podCasts';
import NewsAndUpdates from '../components/sections/newsAndUpdates/newsAndUpdates';
import Careers from '../components/sections/careers/careers';


export default function Home() {
  return (
    <main>
      <Hero />
      <Product />
      <Services />
      <Idea/>
      <CaseStudies/>  
      <Partners/>
      <PodCasts/>
      <NewsAndUpdates/>
      <Careers/>
    </main>
  );
}
