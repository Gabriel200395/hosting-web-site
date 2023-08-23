const Banner = () => {
  return (
      <section className="bg-[#582AF7] h-full w-full px-10 py-10">
        <nav className="flex justify-between items-center pb-10 flex-col lg:flex-row">
          <div className="flex space-x-2 items-center">
            <img src='/logo-hosting.svg' alt='logo' />
            <h3 className="text-white font-normal text-xl">Hostingor</h3>
          </div>
          <ul className="list-none flex space-x-5  max-[500px]:hidden">
            <li className="text-white text-base">Hosting </li>
            <li className="text-white text-base">Domain</li>
            <li className="text-white text-base">Support</li>
            <li className="text-white text-base">Affiliates</li>
            <li className="text-white text-base">Partnership</li>
          </ul>
        </nav>
        <div className="flex lg:flex-row justify-center items-center flex-col">
          <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 md:w-1/2">
            <h2 className="font-semibold w-full text-white mb-5  text-2xl lg:text-6xl lg:max-w-2xl text-center lg:text-start md:text-4xl sm:text-3xl">Trust your site to the world’s #1 web host.</h2>
            <p className="max-w-[430px] font-normal text-base text-center text-white mb-7 lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="bg-[#EF7F3C] w-40 h-12 rounded-lg text-white cursor-pointer">GET Started</button>
          </div>
          <div className="flex justify-end w-full lg:w-1/2 md:w-1/2 pt-10">
            <img src='/serviço.svg' />
          </div>
        </div>
      </section>
  )
}

export default Banner