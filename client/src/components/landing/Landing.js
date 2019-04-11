import React from 'react'
import LandingMain from './LandingMain'
import LandingAesthetics from './LandingAesthetics'
import LandingHealth from './LandingHealth'
import LandingConcept from './LandingConcept'
import LandingConceptMore from './LandingConceptMore'

export default function Landing() {
  return (
    <div >
      <LandingMain />
      <LandingConcept />
      <LandingAesthetics />
      <LandingHealth/>
      <LandingConceptMore />
      
    </div>
  )
}
