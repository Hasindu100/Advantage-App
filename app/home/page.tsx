import Hero from '../../components/homeSections/hero/hero';
import Product from '../../components/homeSections/products/products';
import Services from '../../components/homeSections/services/services';
import CaseStudies from '../../components/homeSections/caseStudies/caseStudies';
import Partners from '../../components/homeSections/partners/partners';
import PodCasts from '../../components/homeSections/podCasts/podCasts';
import NewsAndUpdates from '../../components/homeSections/newsAndUpdates/newsAndUpdates';
import Careers from '../../components/homeSections/careers/careers';
import Community from '../../components/homeSections/community/community';
import CTO from '../../components/homeSections/cto/cto';
import CEO from '../../components/homeSections/ceo/ceo';

const commonClasses = "px-2 sm:px-4 md:px-8 lg:px-16 xl:px-28 max-w-full";

const sections = [
  { id: 'product', component: <Product /> },
  { id: 'services', component: <Services /> },
  { id: 'caseStudies', component: <CaseStudies /> },
  { id: 'partners', component: <Partners /> },
  { id: 'community', component: <Community /> },
];



export default function HomePage() {

    return (
        <main>
            <div className={commonClasses}>
                <Hero />
            </div>

            {sections.map(({ id, component }) => (
                <div key={id} className={commonClasses}>
                    {component}
                </div>
            ))}
            <PodCasts />
            <div className={commonClasses}>
                <CEO />
            </div>

            <div className={commonClasses}>
                <CTO />
            </div>

            <div className={commonClasses}>
                <NewsAndUpdates />
            </div>
            <div className={commonClasses}>
                <Careers />
            </div>
        </main>
    );
}