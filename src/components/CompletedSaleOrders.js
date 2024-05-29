// src/components/CompletedSaleOrders.js
import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import SaleOrderModal from './SaleOrderModal';

const CompletedSaleOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = React.useState(null);

  const handleView = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Render orders dynamically */}
          <Tr>
            <Td>1</Td>
            <Td>Customer A</Td>
            <Td>Completed</Td>
            <Td>
              <IconButton icon={<ViewIcon />} onClick={() => handleView(/* order data */)} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
      {selectedOrder && <SaleOrderModal isOpen={isOpen} onClose={onClose} initialData={selectedOrder} readOnly />}
    </Box>
  );
};

export default CompletedSaleOrders;
