import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  padding: 0px 55px;
`;

export const Title = styled.Text`
  font-size: 22px;
  text-align: center;
  color: #ffffff;
  font-family: 'Manrope-Regular';
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  color: #ffffff;
  margin: 20px 0px 30px 0px;
  font-family: 'Manrope-Regular';
`;

export const BtnStarted = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  border-radius: 23px;
  /* background-color: #880c20; */
  justify-content: center;
  align-items: center;
`;

export const BtnLogin = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  border-radius: 23px;
  border: 1px solid #ee1520;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;
