import React from 'react'
import ResizeBoxes from '../../containers/ResizeBoxes'
import SelectHeader from '../../containers/SelectHeader'
import ContentList from '../../containers/ContentList'
import FooterButton from '../../containers/FooterButton'
import ShowModal from '../../containers/ShowModal'
const NoteHome=(props)=>(
  <ResizeBoxes>
    <SelectHeader/>
    <ContentList history={props.history}/>
    <ShowModal/>
    <FooterButton/>
  </ResizeBoxes>
)

export default NoteHome