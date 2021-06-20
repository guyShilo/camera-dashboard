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

const SettingsCamera = (props) => {
  const [activeCamera, setActiveCamera] = useState({
    camera: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setActiveCamera({
      ...activeCamera,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Update camera"
          title="Camera"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Camera number"
            margin="normal"
            name="camera"
            onChange={handleChange}
            value={activeCamera.camera}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Active"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={activeCamera.confirm}
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

export default SettingsCamera;
