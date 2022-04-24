// next
import type { NextPage } from 'next';

// react
import { useState } from 'react';

// mui
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Home: NextPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);

  return (
    <section className='test bg-[#222] py-20 px-5 grid gap-10'>
      {/* Selected Item */}
      <article className='bg-[#333] p-7 rounded-2xl shadow-md'>
        <p className='text-[#eee] text-2xl mb-4 font-medium'>Selected Item</p>
        <div className='flex justify-between mb-1'>
          <span className='text-[#666]'>Gray Chair</span>
          <span className='text-[#888] font-medium'>$19</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-[#666]'>Tooly Table</span>
          <span className='text-[#888] font-medium'>$19</span>
        </div>
        <div className='flex justify-between mt-5 pt-5 border-t border-dashed border-[#555]'>
          <span className='text-[#666] font-medium'>Total</span>
          <span className='text-[#888] font-medium'>$38</span>
        </div>
        <button className='bg-[#3d3d3d] px-4 py-3 w-full rounded mt-4 text-[#ccc] hover:bg-[#3f3f3f] transition-all'>
          Checkout
        </button>
      </article>

      {/* Profile */}
      <article className='bg-[#333] rounded-2xl shadow-md overflow-hidden'>
        <p className='text-[#eee] text-2xl mb-4 p-7 font-medium'>Profile</p>
        <div className='bg-[#3d3d3d] shadow-[0_-4px_10px_rgba(0,0,0,.1)] relative w-full bottom-0 left-0 rounded-xl py-5 px-7 box-border'>
          <div className='img w-32 h-32 bg-[#444] shadow-lg absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full'></div>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col'>
              <p className='text-[#666]'>Order</p>
              <span className='text-[#888] font-medium'>$340</span>
            </div>
            <div className='flex flex-col items-end'>
              <p className='text-[#666]'>Spent</p>
              <span className='text-[#888] font-medium'>$340</span>
            </div>
          </div>
          <div className='flex flex-col mt-6 text-center'>
            <p className='font-medium text-[#888] text-lg'>Tony Moly</p>
            <span className='text-[#666]'>New York, USA</span>
          </div>
        </div>
      </article>

      {/* card item */}
      <article className='container bg-[#333] rounded-2xl shadow-md overflow-hidden'>
        <div className='card-header flex justify-between items-center'>
          <div className='icon-container p-5 w-fit cursor-pointer'>
            <ArrowBackIcon className='text-[#666]' />
          </div>
          <div className='flex items-center text-[#666]'>
            <div
              className='star flex items-center gap-2 p-5 cursor-pointer'
              onClick={() => setIsFavorites(!isFavorites)}
            >
              {isFavorites ? (
                <StarIcon className='text-[#fdff7a]' />
              ) : (
                <StarBorderIcon />
              )}
              <span className='text-xl text-[#aaa]'>4.9</span>
            </div>
            <div
              className='like text-[#666] p-5 cursor-pointer'
              onClick={() => setIsLiked(!isLiked)}
            >
              {isLiked ? (
                <FavoriteIcon className='text-[#ff8d78]' />
              ) : (
                <FavoriteBorderIcon />
              )}
            </div>
          </div>
        </div>
        <div className='img w-full h-[300px] bg-[#444]'></div>
        <div className='grid grid-cols-2'>
          <div className='item-info p-5'>
            <p className='item-title text-[#aaa] text-2xl font-medium'>
              Swoon Lounge
            </p>
            <span className='item-category text-[#666]'>Chair</span>
          </div>
          <div className='item-count flex items-center gap-5 p-5 justify-end'>
            <button className='bg-[#3d3d3d] w-8 h-8 rounded text-[#888] font-medium'>
              -
            </button>
            <span className='counter text-xl text-[#aaa] font-medium'>1</span>
            <button className='bg-[#3d3d3d] w-8 h-8 rounded text-[#888] font-medium'>
              +
            </button>
          </div>
        </div>
        <div className='card-bottom flex items-center justify-between p-5'>
          <p className='price text-3xl font-medium text-[#aaa]'>$450</p>
          <button className='bg-[#3d3d3d] hover:bg-[#3f3f3f] text-[#888] font-medium px-7 py-3 rounded-lg'>
            Add to cart
          </button>
        </div>
      </article>
    </section>
  );
};

export default Home;
