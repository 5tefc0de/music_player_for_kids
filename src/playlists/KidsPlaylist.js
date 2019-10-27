import React, { useState } from 'react'
import styled from 'styled-components/macro'
import ItemsCarousel from 'react-items-carousel'
import PropTypes from 'prop-types'

KidsPlayList.propTypes = {
  setCurrentSong: PropTypes.func,
  songs: PropTypes.array.isRequired,
}
export default function KidsPlayList({ setCurrentSong, songs }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  return (
    <PlaylistStyled>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<PlaylistButton>{'<'}</PlaylistButton>}
        rightChevron={<PlaylistButton>{'>'}</PlaylistButton>}
        alwaysShowChevrons
        chevronWidth={40}
        outsideChevron
        activePosition={'center'}
      >
        {songs
          .filter(song => song.selected === true)
          .map((song, index) => (
            <ImageStyled
              onClick={() => setCurrentSong(song)}
              src={song.image}
              alt={song.title}
              key={index}
              type="image"
            ></ImageStyled>
          ))}
      </ItemsCarousel>
    </PlaylistStyled>
  )
}


const PlaylistStyled = styled.div`
  width: 20em;
  padding: 0 2.8em;
`
const PlaylistButton = styled.button`
  background-color: #ff9393;
  border-radius: 0.3em;
  font-size: 2em;
  padding: 0.25em 0.5em;
  margin: 0.25em;
  color: white;
`
const ImageStyled = styled.input`
  position: relative;
  left: 0.7em;
  width: 90%;
  border-radius: 0.5em;
`