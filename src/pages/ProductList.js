import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ProductListResults from 'src/components/customer/ProductListResults';
import ProductListToolbar from 'src/components/customer/ProductListToolbar';
import events from 'src/__mocks__/events';

const ProductList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar customers={events} />
        <Box sx={{ pt: 3 }}>
          <ProductListResults customers={events} />
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductList;
