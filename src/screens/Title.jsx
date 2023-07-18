import React from 'react'

const Title = () => {
    return (
        <div className="flex flex-row">
          <div className='flex w-auto'>
            <Sidebar />
          </div>
          <div className='flex flex-col w-full'>
            <Header />
            <CalltoAction />
            <Pathway />
          </div>
          
        </div>
      );
}

export default Title;