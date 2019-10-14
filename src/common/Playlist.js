import React, { useState } from 'react'
import styled from 'styled-components/macro'
import ItemsCarousel from 'react-items-carousel'

export default function PlayList({ setCurrentSong, songs, activePage }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40

  return (
    <PlaylistStyled style={{ padding: `0 ${chevronWidth}px` }}>
      {activePage === 0 && (
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={1}
          gutter={20}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          alwaysShowChevrons
          chevronWidth={chevronWidth}
          outsideChevron
          activePosition={'center'}
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
      )}
      {activePage !== 0 && (
        <div>
          {songs.map((song, index) => (
            <ImageStyled
              onClick={() => setCurrentSong(song)}
              alt={song.title}
              key={index}
              type="image"
            ></ImageStyled>
          ))}
        </div>
      )}
    </PlaylistStyled>
  )
}

const ImageStyled = styled.input`
  position: relative;
  left: 12px;
  width: 90%;
  border-radius: 0.5em;
`
const PlaylistStyled = styled.div`
  max-width: 95vw;
`
