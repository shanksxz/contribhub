import React from 'react'
import Projects from '@/components/Projects/Projects'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects looking for code reviews | Contribhub',
  description: 'Find the best projects looking for code reviews'
}

function ReviewsContributionsProjectsPage() {
  return (
    <div className='flex flex-col items-center w-full pb-20'>
      <div className='w-full max-w-7xl flex flex-col items-center px-4 mt-24'>
        <div className='flex flex-col items-center space-y-1 mb-10'>
          <h1 className='text-4xl font-bold'>Open Source Projects looking for code reviews</h1>
          <h2 className='text-lg text-gray-600'>Find the best open source projects looking for code reviews</h2>
        </div>
      </div>
      <div className='w-full px-4'>
        <Projects initialContributions={['reviews']} showFindBar={true} />
      </div>
    </div>
  )
}

export default ReviewsContributionsProjectsPage