import React from 'react'
import ResizeBoxes from '../../containers/ResizeBoxes'
import SelectHeader from '../../containers/SelectHeader'
import ContentList from '../../containers/ContentList'
import FooterButton from '../../containers/FooterButton'
import ShowModal from '../../containers/ShowModal'
import ShowMenu from '../../containers/ShowMenu'
const NoteHome=(props)=>(
  <ResizeBoxes>
    <SelectHeader/>
    <ContentList history={props.history}/>
    <ShowModal/>
    <ShowMenu/>
    <FooterButton/>
  </ResizeBoxes>
)

export default NoteHome