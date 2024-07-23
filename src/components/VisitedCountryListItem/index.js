import {
  VisitedListItem,
  VisitedCountryFlag,
  VisitedCountryDetailsContainer,
  VisitedCountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountryListItem = props => {
  const {visitedCountryDetails, onRemoveVisit} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onRemove = () => {
    onRemoveVisit(id)
  }

  return (
    <VisitedListItem>
      <VisitedCountryFlag src={imageUrl} alt="thumbnail" />
      <VisitedCountryDetailsContainer>
        <VisitedCountryName>{name}</VisitedCountryName>
        <RemoveButton type="button" onClick={onRemove}>
          Remove
        </RemoveButton>
      </VisitedCountryDetailsContainer>
    </VisitedListItem>
  )
}

export default VisitedCountryListItem
