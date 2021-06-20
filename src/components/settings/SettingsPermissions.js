import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  MenuItem,
  TextField
} from '@material-ui/core';

const SettingsPermission = (props) => {
  const [permissions, setPermissions] = useState({
    permissison: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setPermissions({
      ...permissions,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Update permission"
          title="Permission"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Permission"
            margin="normal"
            name="permission"
            onChange={handleChange}
            value={permissions.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Active"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            value={permissions.confirm}
            variant="outlined"
            select
          >
            <MenuItem value="ON">
              ON
            </MenuItem>
            <MenuItem value="OFF">
              OFF
            </MenuItem>
          </TextField>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsPermission;
