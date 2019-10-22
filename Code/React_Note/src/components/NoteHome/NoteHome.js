import React from 'react'
import ResizeBoxes from '../../containers/ResizeBoxes'
import SelectHeader from '../../containers/SelectHeader'
import ContentList from '../../containers/ContentList'
import FooterButton from '../../containers/FooterButton'
const NoteHome=(props)=>(
  <ResizeBoxes>
    <SelectHeader/>
    <ContentList/>
    <FooterButton/>
  </ResizeBoxes>
)

export default NoteHome