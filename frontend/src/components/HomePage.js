
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from './store/Slice';
import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const state = useSelector((state) => state.video);
  const defaultCategory = '172';
  
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  
  useEffect(() => {
    console.log('Selected Category:', selectedCategory);
    dispatch(fetchVideos(selectedCategory));
  }, [dispatch, selectedCategory]);

  // Check if the videos array exists in the API response
  const videosArray = state.data.message || [];

  const handleSubHeaderClick = (sub_category_id) => {
    setSelectedCategory(`${sub_category_id}`);
  };
  const handleVideoClick=(id)=>{
    // localStorage.setItem("clickedvideo",id)
  
    navigate(`/videos/${id}`)
  }
  
  return (
    <>
      <div>
        <Header/>
        <SubHeader names={state.data.name} onClick={handleSubHeaderClick}/>
      </div>
      <div className='grid lg:grid-cols-4 lg:rounded-2xl rounded-lg lg:gap-6 lg:mt-6 lg:px-16 grid-cols-2 mt-4 px-4 gap-4 mb-4'>
        {videosArray.map((video) => (
          <div key={video.id} onClick={()=>handleVideoClick(video.id)}>
            <p className=''>
              {video.imgurl && <img src={video.imgurl} alt={video.name} className='rounded-t-2xl' />}
            </p>
            <p className='bg-zinc-400 rounded-b-2xl truncate px-4 lg:py-0 py-3'>{video.description}</p>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
