import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const PageBackground = ({ children, withImage = true }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const bgImage = isLight
    ? 'https://images.unsplash.com/photo-1600025644459-ae91eefbac84?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    : 'https://images.unsplash.com/photo-1659167530799-982cfce69360?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        ...(withImage
          ? {
              backgroundImage: `url('${bgImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : {
              background: isLight
                ? 'linear-gradient(135deg,rgb(119, 115, 115) 0%, #f0f0f0 50%, #e6e6e6 100%)'
                : 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 50%, #111111 100%)',
            }),
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: withImage
            ? isLight
              ? 'linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.17))'
              : 'rgba(30, 22, 54, 0.13)'
            : isLight
            ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)'
            : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          backdropFilter: withImage && isLight ? 'brightness(0.65)' : 'none',
          zIndex: 1,
        },
      }}
    >
      {children}
    </Box>
  );
};
