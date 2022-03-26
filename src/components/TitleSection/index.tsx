import React from 'react';
import {Image} from 'react-native';
import {AlignTopView, ContainerTopView, Seeall, TextTopView} from './styles';

interface TitleSectionProps {
  icon: any;
  styleIcon: any;
  title: string;
  styleContainer?: any;
}

const TitleSection = ({
  icon,
  styleIcon,
  title,
  styleContainer,
}: TitleSectionProps) => {
  return (
    <ContainerTopView style={styleContainer}>
      <AlignTopView>
        <Image source={icon} style={styleIcon} />
        <TextTopView>{title}</TextTopView>
      </AlignTopView>
      <Seeall>See all</Seeall>
    </ContainerTopView>
  );
};

export default TitleSection;
