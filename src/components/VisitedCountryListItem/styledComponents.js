import styled from 'styled-components'

export const VisitedListItem = styled.li`
  flex-grow: 1;
  max-width: 32.7%;
  background-color: #1f1f2f;
  display: flex;
  flex-direction: column;
`

export const VisitedCountryFlag = styled.img``

export const VisitedCountryDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;
`

export const VisitedCountryName = styled.p`
  color: #f8fafc;
  font-size: 18px;
  margin: 0;
`

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-size: 14px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
`
