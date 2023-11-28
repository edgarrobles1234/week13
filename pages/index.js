import Link from 'next/link'
import Layout from '../components/layout';
import { getSortedList} from '../lib/data';
import { getSortedList2} from '../lib/data2';
import { getSortedList3} from '../lib/data3';


export async function getStaticProps(){
  const allData = await getSortedList();//do same thing but for other json write function
  const allData2 = await getSortedList2();
  const allData3 = await getSortedList3();
  return {
    props: { allData, allData2, allData3}//,allData2? }
  };
}



export default function HomePage ( {allData, allData2, allData3} ){//allData2 map other info
  return (
    <Layout itIsHome>

    <h1>Sorted List from WordPress</h1>
    <ul className="list-group list-group-flush card">
      <h2>List of Posts</h2>
      { allData.map (
        
        ({id,team, name}) =>
        <Link key ={id} href={`/contacts/${id}`} className="list-group-item list-group-item-action">
          <div>Title: {name}</div>
          <div>Status: {team}</div>
        </Link>

      )
      }
    </ul>
    <ul className="list-group list-group-flush card">
      <h2>List of 2nd Post Type</h2>
      { allData2.map (
        
        ({id,team, name}) =>
        <Link key ={id} href={`/type2/${id}`} className="list-group-item list-group-item-action">
          <div>Title: {name}</div>
          <div>Status: {team}</div>
        </Link>

      )
      }
    </ul>
    <ul className="list-group list-group-flush card">
      <h2>List of 3rd Post Type</h2>
      { allData3.map (
        
        ({id,team, name}) =>
        <Link key ={id} href={`/type3/${id}`} className="list-group-item list-group-item-action">
          <div>Title: {name}</div>
          <div>Status: {team}</div>
        </Link>

      )
      }
    </ul>

    </Layout>
  );
};