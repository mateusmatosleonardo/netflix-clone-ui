import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const ContainerTopView = styled.View`
  width: 100%;
  padding: 25px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AlignTopView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Stars = styled.Image`
  width: 16px;
  height: 16px;
`;

export const TextTopView = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-family: 'Manrope-Regular';
  margin-left: 5px;
`;

export const Seeall = styled.Text`
  font-size: 10px;
  color: #ee1520;
  font-family: 'Manrope-Regular';
`;

export const ContainerSlider = styled.View`
  width: 100%;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 180px;
`;
