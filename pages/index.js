import Link from 'next/link'
import Layout from '../components/layout';
import { getSortedList} from '../lib/data';

export async function getStaticProps(){
  const allData = await getSortedList();//do same thing but for other json write function
  return {
    props: { allData}//,allData2? }
  };
}

export default function HomePage ( {allData} ){//allData2 map other info
  return (
    <Layout itIsHome>

    <h1>Sorted List from WordPress</h1>
    <ul className="list-group list-group-flush card">
      <h2>List of Posts</h2>
      { allData.map (
        
        ({id,team, name}) =>
        <Link key ={id} href={`/${id}`} className="list-group-item list-group-item-action">
          <div>Title: {name}</div>
          <div>Status: {team}</div>
        </Link>

      )
      }
    </ul>

    </Layout>
  );
};