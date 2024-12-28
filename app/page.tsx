import HomePage from './home/page';
import Hero from '../components/homeSections/hero/hero';
import Product from '../components/homeSections/products/products';
import Services from '../components/homeSections/services/services';
import CaseStudies from '../components/homeSections/caseStudies/caseStudies';
import Partners from '../components/homeSections/partners/partners';
import PodCasts from '../components/homeSections/podCasts/podCasts';
import NewsAndUpdates from '../components/homeSections/newsAndUpdates/newsAndUpdates';
import Careers from '../components/homeSections/careers/careers';
import ResponsiveNav from '@/components/homeSections/navBar/responsiveNav';

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}