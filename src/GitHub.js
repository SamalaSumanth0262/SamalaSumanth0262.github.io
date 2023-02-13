const GitHub = () => {
  return (
    <div className='bg-white   text-black text-md font-normal dark_disabled:text-white rounded-lg shadow-xl p-5 mb-10'>
      <div className='text-gray-600 text-2xl font-bold hover:animate-pulse'>
        {' '}
        My GitHub Presence
      </div>
      <div className='text-black mt-5 leading-8 hover:animate-pulse	'>
        &nbsp;&nbsp;&nbsp;&nbsp;Companies may change but open source is
        constant. Praise the community. 🚀
      </div>
      <img
        src='http://ghchart.rshah.org/SamalaSumanth0262'
        alt='Samala Sumanth GitHub'
        style={{ width: '100%', marginTop: '2rem' }}
      />
    </div>
  );
};

export default GitHub;
