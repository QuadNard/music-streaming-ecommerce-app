
import Introduction from '../components/Introduction';
import Listening from '../components/contents/Listening';
import InfoCenter from '../components/contents/InfoCenter';
import { Tabs } from '../components/shared/Tabs';
import { supabase } from '../utils/supadb/SupabaseClient';


const tabs = [
    'Info',
    'Booth',
];




export default async function Page() {
     

    let {data: products, error} = await supabase.from('product').select('*');

    const contents = [
    <InfoCenter products={products} />,
      <Listening />,
    ];
    
  return (
     <main className="flex-1 pb-16 md:pb-20 lg:pb-24">
      <Introduction />
      <Tabs tabs={tabs} defaultTab={0} contents={contents} />
    </main>
  )
}


