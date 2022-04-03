import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
`;

export const Touched = styled.TouchableOpacity``;

export const ContainerInput = styled.View`
  width: 100%;
  margin-top: 200px;
`;

export const InputArea = styled.View`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #fafafa;
`;

export const BtnSignIn = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  border-radius: 4px;
  border: 1px solid #ee1520;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const RetrieverPasswordText = styled.Text`
  font-size: 12px;
`;
