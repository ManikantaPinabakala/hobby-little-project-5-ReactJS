import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1f1f2f;
  border-bottom: 1px solid #334155;
  padding: 0 40px;
`

export const CountryName = styled.p`
  color: #f8fafc;
  font-size: 18px;
`

export const VisitButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`

export const VisitedText = styled.p`
  color: #94a3b8;
  font-size: 14px;
  font-weight: bold;
  padding-inline: 10px;
`
