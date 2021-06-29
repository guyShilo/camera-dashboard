import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const ProductListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button onClick={() =>  props.setResults(props.customers.filter(customer => customer.numberoffaces - customer.numberoffaceswithmask >= 1))}>
        Viloations is last 24 hours
      </Button>
      <Button onClick={() =>  props.setResults(props.customers.filter(customer => customer.numoffaces - customer.numoffaceswithmask) > 0)}>
        Without masks incidents in last 24 hours
      </Button>
      <Button sx={{ mx: 1 }}>
        Export
      </Button>
      {/* <Button
        color="primary"
        variant="contained"
      >
        Add customer
      </Button> */}
    </Box>
    {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search camera"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box> */}
  </Box>
);

export default ProductListToolbar;
