import React, { useState } from 'react'
import styled from 'styled-components/macro'
import ItemsCarousel from 'react-items-carousel'

export default function PlayList({ setCurrentSong, songs }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {songs.map((song, index) => (
          <ImageStyled
            onClick={() => setCurrentSong(song)}
            src={song.image}
            alt={song.title}
            key={index}
            type="image"
          ></ImageStyled>
        ))}
      </ItemsCarousel>
    </div>
  )
}

const ImageStyled = styled.input`
  border: 2px solid #000;
  max-width: 48vw;
`
