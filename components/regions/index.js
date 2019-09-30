import FaTag from 'react-icons/lib/fa/tag'
import FaList from 'react-icons/lib/fa/list'

import {getRegions} from '../../lib/api/geo'

import Section from '../section'
import Summary from '../summary'
import TechnicalDoc from '../technical-doc'

import ByName from '../demo/by-name'

import RegionsList from './regions-list'

import doc from './doc'

const examples = [
  {title: 'Recherche par nom', id: 'name', icon: <FaTag />},
  {title: 'Liste des régions', id: 'regions-list', icon: <FaList />}
]

const Regions = () => (
  <div>
    <Summary examples={examples} />

    <TechnicalDoc {...doc} />

    <Section background='grey'>
      <ByName
        defaultInput='Hauts-de-France'
        placeholder='Rechercher une région…'
        renderQuery={({input}) => getRegions({params: {nom: input}, limit: 5})}
      />
    </Section>
    <RegionsList />
  </div>
)

export default Regions