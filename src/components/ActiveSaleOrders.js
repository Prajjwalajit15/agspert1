// src/components/ActiveSaleOrders.js
import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import SaleOrderModal from './SaleOrderModal';

const ActiveSaleOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = React.useState(null);

  const handleEdit = (order) => {
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
            <Td>Active</Td>
            <Td>
              <IconButton icon={<EditIcon />} onClick={() => handleEdit(/* order data */)} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
      {selectedOrder && <SaleOrderModal isOpen={isOpen} onClose={onClose} initialData={selectedOrder} />}
    </Box>
  );
};

export default ActiveSaleOrders;