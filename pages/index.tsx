import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <section className='test bg-[#333] py-20 px-5 grid gap-5'>
      <article className='bg-[#444] p-7 rounded-xl shadow-sm'>
        <p className='text-[#eee] text-2xl mb-4'>Selected Item</p>
        <div className='flex justify-between mb-1'>
          <span className='text-[#999]'>Gray Chair</span>
          <span className='text-[#aaa] font-medium'>$19</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-[#999]'>Tooly Table</span>
          <span className='text-[#aaa] font-medium'>$19</span>
        </div>
        <div className='flex justify-between mt-5 pt-5 border-t border-dashed border-[#666]'>
          <span className='text-[#999] font-medium'>Total</span>
          <span className='text-[#aaa] font-medium'>$38</span>
        </div>
        <button className='bg-[#555] px-4 py-2 w-full rounded mt-4 text-[#ccc]'>
          Checkout
        </button>
      </article>
    </section>
  );
};

export default Home;
