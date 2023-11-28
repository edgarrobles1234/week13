import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data3';


export async function getStaticProps( { params } ) {
  const itemData = await getData(params.id);

  return {
    props: {
      itemData
    }
  };
}


export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">Title: {itemData.post_title}</h5>
        <div className="card-text">Favorite Sport: {itemData.acf_fields.favorite_sport}</div>
        <div className="card-text">Favorite Season: {itemData.acf_fields.favorite_season}</div>
        <div className="card-text">Favorite Food: {itemData.acf_fields.favorite_food}</div>
        </div>
      </article>
    </Layout>
  );
}