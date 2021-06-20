import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SettingsNotifications from 'src/components/settings/SettingsNotifications';
import SettingsPassword from 'src/components/settings/SettingsPassword';
import SettingsPermission from 'src/components/settings/SettingsPermissions';
import SettingsCamera from 'src/components/settings/SettingsCameras';

const SettingsView = () => (
  <>
    <Helmet>
      <title>Settings | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          <SettingsPermission />
        </Box>
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
        <Box sx={{ pt: 3 }}>
          <SettingsCamera />
        </Box>
      </Container>
    </Box>
  </>
);

export default SettingsView;
