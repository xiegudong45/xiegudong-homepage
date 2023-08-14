import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between
  height: 30px;
  line-height: 20px;
  padding: 10px;
  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const footPrintImg = `avatar.svg`;
  return (
    <Link href="/">
      <LogoBox>
        <Image src={footPrintImg} width={35} height={35} alt="avatar" />
      </LogoBox>
    </Link>
  );
};

export default Logo;
