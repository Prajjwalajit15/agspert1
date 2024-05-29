// src/pages/SaleOrdersPage.js
import React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Button, useDisclosure } from '@chakra-ui/react';
import ThemeToggle from '../components/ThemeToggle';
import ActiveSaleOrders from '../components/ActiveSaleOrders';
import CompletedSaleOrders from '../components/CompletedSaleOrders';
import SaleOrderModal from '../components/SaleOrderModal';

const SaleOrdersPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={4}>
      <ThemeToggle />
      <Button onClick={onOpen}>+ Sale Order</Button>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ActiveSaleOrders />
          </TabPanel>
          <TabPanel>
            <CompletedSaleOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <SaleOrderModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default SaleOrdersPage;
