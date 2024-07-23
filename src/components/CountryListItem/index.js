import {
  ListItem,
  CountryName,
  VisitButton,
  VisitedText,
} from './styledComponents'

const CountryListItem = props => {
  const {countryDetails, onVisitCountry} = props
  const {id, name, isVisited} = countryDetails

  const onVisit = () => {
    onVisitCountry(id)
  }

  return (
    <ListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <VisitButton type="button" onClick={onVisit}>
          Visit
        </VisitButton>
      )}
    </ListItem>
  )
}

export default CountryListItem
