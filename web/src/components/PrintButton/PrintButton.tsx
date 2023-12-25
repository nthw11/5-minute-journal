import { Button } from "@chakra-ui/react";


const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button onClick={handlePrint}>Print this page</Button>
  );
};

export default PrintButton;
