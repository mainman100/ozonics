import React from 'react';
import HealthzonesMain from './HealthzonesMain';
import HealthzonesQualities from './HealthzonesQualities';
import HealthzonesZOH from './HealthzonesZOH';

export default function Healthzones() {
  return (
    <reactFragment>
      <HealthzonesMain />
      <HealthzonesZOH />
      <HealthzonesQualities />
    </reactFragment>
  )
}
