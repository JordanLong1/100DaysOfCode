import React from 'react'


export default function Schedule({clockIn, firstBreak, lunch, secondBreak, leave }) {
  return (
    <div>
      <h2> Schedule Info </h2>
      <h4>Clock In: {clockIn}</h4>
      <h4>Morning Break: {firstBreak}</h4>
      <h4>Lunch: {lunch}</h4>
      <h4>Afternoon Break: {secondBreak}</h4>
      <h4>Clock Out: {leave}</h4>

      </div>
  )
}