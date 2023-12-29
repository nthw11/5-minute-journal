import { useMediaQuery, Box, BoxProps } from '@chakra-ui/react';

const PrintHide: React.FC<BoxProps> = ({ children, ...props }) => {
  const [isPrinting] = useMediaQuery('print');

  return (
    <Box display={isPrinting ? 'none' : 'block'} {...props}>
      {children}
    </Box>
  );
};

export default PrintHide;
