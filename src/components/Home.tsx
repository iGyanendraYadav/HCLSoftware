import React from 'react'
import CompOne from './CompOne.tsx';
import CompTwo from './CompTwo.tsx';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <CompOne/>
      <CompTwo/>
    </div>
  )
}

export default Home