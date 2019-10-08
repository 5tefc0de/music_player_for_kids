import React, { useState } from 'react'



export default function PlayList({ songsData }) {

    return (
      <section>
        {songsData.map((singleSongData, index) => {
          return <div data={singleSongData} key={index} />
        })}
      </section>
    )
  }
