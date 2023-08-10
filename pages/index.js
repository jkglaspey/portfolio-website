import { getSortedPostsData } from '../lib/posts';
import { Base } from '../components/templates/Base';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Base />
  );
}