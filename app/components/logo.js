import { useColorMode, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
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

const MyAvatar = ({ fill }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="30.000000pt"
      height="30.000000pt"
      viewBox="0 0 1000.000000 1000.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path d="M3750 8545 l0 -205 -210 0 -210 0 0 -210 0 -210 -210 0 -210 0 0 -415 0 -415 -622 -2 -623 -3 -3 -212 -2 -213 625 0 625 0 0 -1250 0 -1250 210 0 210 0 0 -205 0 -205 210 0 210 0 0 -205 0 -205 -210 0 -210 0 0 -210 0 -210 -415 0 -415 0 0 -210 0 -210 -210 0 -210 0 0 -205 0 -205 -207 -2 -208 -3 -3 -1042 -2 -1043 215 0 215 0 0 1040 0 1040 205 0 205 0 0 210 0 210 205 0 205 0 0 -1250 0 -1250 2085 0 2085 0 0 1038 c0 571 2 1041 4 1043 2 2 97 3 210 1 l206 -3 0 -1039 0 -1040 210 0 210 0 0 1045 0 1045 -210 0 -210 0 0 205 0 205 -205 0 -205 0 0 210 0 210 -210 0 -210 0 0 210 0 210 -210 0 -210 0 0 205 0 205 210 0 210 0 0 205 0 205 210 0 210 0 0 1880 0 1880 -210 0 -210 0 0 210 0 210 -210 0 -210 0 0 205 0 205 -1250 0 -1250 0 0 -205z m2500 -1250 l0 -205 -625 0 -625 0 0 205 0 205 625 0 625 0 0 -205z m410 -1880 l0 -1245 -205 0 -205 0 0 -210 0 -210 -210 0 -210 0 0 -625 0 -625 -620 0 -620 0 -2 208 -3 207 -207 3 -208 2 0 415 0 415 -210 0 -210 0 0 210 0 210 -205 0 -205 0 0 1245 0 1245 1660 0 1660 0 0 -1245z" />
        <path d="M4586 5832 c-3 -5 -4 -100 -3 -213 l2 -204 208 -3 207 -2 0 215 0 215 -204 0 c-113 0 -207 -4 -210 -8z" />
        <path d="M5840 5835 c0 -3 0 -95 0 -205 0 -110 0 -204 0 -210 0 -6 75 -10 205 -10 l205 0 0 215 0 215 -205 0 c-113 0 -205 -2 -205 -5z" />
        <path d="M4584 4577 c-2 -7 -3 -102 -2 -212 l3 -200 625 0 625 0 0 210 0 210 -623 3 c-500 2 -624 0 -628 -11z" />
      </g>
    </svg>
  );
};

const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <Link href="/">
      <LogoBox>
        <MyAvatar fill={`${colorMode === 'light' ? '#000000' : '#FFFFFF'}`} />
      </LogoBox>
    </Link>
  );
};

export default Logo;
