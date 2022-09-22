import { useParams } from 'react-router-dom';
import Playlist from '../components/Playlist/Playlist';
import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/Sidebar';
import Title from '../components/Title/Title';
import { useFilterTracks } from '../hooks/useFilteredTracks';
import { useGetCollectionQuery } from '../store/tracksAPI';

const CollectionPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCollectionQuery(Number(id));
  const { searchQuery, filteredTracks, changeHandler } = useFilterTracks(
    data?.items
  );

  return (
    <main className="main">
      <div className="main-content">
        <Search query={searchQuery} onChange={changeHandler} />
        <Title text={data?.name} />
        <Playlist tracks={filteredTracks} loading={isLoading} />
      </div>
      <Sidebar isOffersShown={false} />
    </main>
  );
};

export default CollectionPage;