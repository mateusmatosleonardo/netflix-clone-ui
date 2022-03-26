import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 5px;
`;

export const Menu = styled.Image`
  width: 22px;
  height: 22px;
`;

export const Notifications = styled.Image`
  width: 18.35px;
  height: 22.9px;
`;

export const NumberNotifications = styled.Text`
  position: absolute;
  top: -4px;
  left: -4px;
  border-radius: 50px;
  font-size: 10px;
  padding: 0px 5px 0px 5px;
  text-align: center;
  background-color: #ee1520;
`;

export const ContainerSlider = styled.View`
  width: 100%;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 180px;
`;
