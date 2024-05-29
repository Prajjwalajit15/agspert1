import React, { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useItems } from '../hooks/useItems';

const SaleOrderModal = ({ isOpen, onClose, initialData = {}, readOnly = false }) => {
  const { control, register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      customer_id: initialData.customer_id || '',
      invoice_no: initialData.invoice_no || '',
      invoice_date: initialData.invoice_date ? new Date(initialData.invoice_date) : null,
      items: initialData.items || '',
    }
  });

  const { data: items, isLoading, isError } = useItems();
  const toast = useToast();

  useEffect(() => {
    reset({
      customer_id: initialData.customer_id || '',
      invoice_no: initialData.invoice_no || '',
      invoice_date: initialData.invoice_date ? new Date(initialData.invoice_date) : null,
      items: initialData.items || '',
    });
  }, [initialData, reset]);

  const onSubmit = (data) => {
    console.log(data);
    toast({
      title: 'Sale order saved.',
      description: "Your sale order has been successfully saved.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{initialData.customer_id ? 'Edit Sale Order' : 'Create Sale Order'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.customer_id} mb={4}>
              <FormLabel>Customer ID</FormLabel>
              <Input
                type="text"
                {...register('customer_id', { required: 'Customer ID is required' })}
                readOnly={readOnly}
              />
              {errors.customer_id && <p>{errors.customer_id.message}</p>}
            </FormControl>
            <FormControl isInvalid={errors.invoice_no} mb={4}>
              <FormLabel>Invoice Number</FormLabel>
              <Input
                type="text"
                {...register('invoice_no', { required: 'Invoice number is required' })}
                readOnly={readOnly}
              />
              {errors.invoice_no && <p>{errors.invoice_no.message}</p>}
            </FormControl>
            <FormControl isInvalid={errors.invoice_date} mb={4}>
              <FormLabel>Invoice Date</FormLabel>
              <Controller
                control={control}
                name="invoice_date"
                rules={{ required: 'Invoice date is required' }}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    disabled={readOnly}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="Select date"
                  />
                )}
              />
              {errors.invoice_date && <p>{errors.invoice_date.message}</p>}
            </FormControl>
            <FormControl isInvalid={errors.items} mb={4}>
              <FormLabel>Items</FormLabel>
              <Select
                placeholder="Select items"
                {...register('items', { required: 'At least one item is required' })}
                isDisabled={readOnly}
              >
                {isLoading ? (
                  <option>Loading...</option>
                ) : isError ? (
                  <option>Error loading items</option>
                ) : (
                  items.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))
                )}
              </Select>
              {errors.items && <p>{errors.items.message}</p>}
            </FormControl>
            {!readOnly && (
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            )}
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;

