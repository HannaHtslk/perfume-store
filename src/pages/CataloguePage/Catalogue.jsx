import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/products/operations';
import {
  selectProducts,
  selectProductsLoading,
  selectProductsError,
} from '@/redux/products/selectors';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Box,
  Pagination,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PAGE_SIZE = 8;

export const Catalogue = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const bgImage = isLight
    ? 'https://images.unsplash.com/photo-1600025644459-ae91eefbac84?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    : 'https://images.unsplash.com/photo-1543857261-f71238eb4188?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const pageCount = Math.ceil(products.length / PAGE_SIZE);
  const paginatedProducts = products.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  if (loading)
    return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 4, sm: 6 },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'rgba(30, 22, 54, 0.13)',
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {paginatedProducts.map(product => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={2}
              xl={2}
              display="flex"
              justifyContent="center"
            >
              <Card
                sx={{
                  maxWidth: 260,
                  width: '100%',
                  height: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  mx: 'auto',
                  boxShadow: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  image={product.imageUrl}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    minHeight: 80,
                    p: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      gutterBottom
                      noWrap
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '0.92rem',
                      }}
                    >
                      {product.description}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="primary"
                    sx={{ mt: 1, fontWeight: 600 }}
                  >
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {pageCount > 1 && (
          <Stack alignItems="center" mt={4}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </Stack>
        )}
      </Box>
    </Box>
  );
};
