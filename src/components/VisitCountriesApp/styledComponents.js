import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #161624;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin: 0;
`

export const CountryList = styled.ul`
  list-style: none;
  height: 300px;
  padding-left: 0;
  border: 1px solid #334155;
  border-radius: 5px;
  margin-block: 20px;
  overflow: auto;
`

export const VisitedCountryList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`

export const NoCountriesContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoCountriesVisitedText = styled.p`
  color: #f8fafc;
  font-size: 20px;
`
