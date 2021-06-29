import {
  TextField,
  Button,
  Card,
  MenuItem,
  Box,
  Divider,
  CardHeader,
  CardContent
} from '@material-ui/core';
import { useState } from 'react';
const headers = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`
}
const SettingsNotifications = (props) => {
  const [values, setValues] = useState({
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleRequest = async () => {
    const {data} = await axios.get(`http://192.168.0.160:8080/GlassfishPiCamREST/api/changeInterval?IntervalMinutes=${confirm}`, {headers});
    if(data.msg){
      alert('Interval updated')
    } else if (data.err) {
      alert(data.err)
    }
  }

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Update camera interval time"
          title="Camera Interval"
        />
        <Divider />
        <CardContent>

          <TextField
            fullWidth
            label="Set camera interval"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            value={values.confirm}
            variant="outlined"
            select
          >
            <MenuItem value="1">
              One minute
            </MenuItem>
            <MenuItem value="5">
              5 minutes
            </MenuItem>
            <MenuItem value="10">
              10 minutes
            </MenuItem>
            <MenuItem value="15">
              15 minutes
            </MenuItem>
            <MenuItem value="30">
              30 minutes
            </MenuItem>
            <MenuItem value="60">
              1 hour
            </MenuItem>
            <MenuItem value="240">
              4 hours
            </MenuItem>
            <MenuItem value="1440">
              24 hours
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
            onClick={async () => handleRequest()}
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsNotifications;
