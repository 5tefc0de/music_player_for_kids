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
          leftChevron={<PlaylistButton>{'<'}</PlaylistButton>}
          rightChevron={<PlaylistButton>{'>'}</PlaylistButton>}
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
       <PlaylistonParentsPageStyled>
          {songs.map((song, index) => (
            <PlaylistButtononParentsPage
              onClick={() => setCurrentSong(song)}
              alt={song.title}
              key={index}
              type="image"
            ></PlaylistButtononParentsPage>
          ))}
          </PlaylistonParentsPageStyled>
       
      )}
    </PlaylistStyled>
  )
}

const ImageStyled = styled.input`
  position: relative;
  left: 13px;
  width: 90%;
  border-radius: 0.5em;
`
const PlaylistStyled = styled.div`
  width: 100vw;
`
const PlaylistButton = styled.button`
  background-color: skyblue;
  border-radius: 0.3em;
  font-size: 2em;
  line-height: 1.2;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
  color: white;
  font-style: bold;
`

const PlaylistButtononParentsPage = styled.input`
  background-color: skyblue;
  border-radius: 0.3em;
  font-size: 1em;
  line-height: 1.2;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
  color: white;
  font-style: bold;
`

const PlaylistonParentsPageStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 85vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1em;
`


