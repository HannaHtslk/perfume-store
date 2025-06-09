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

const PAGE_SIZE = 8;

export const Catalogue = () => {
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
    <div>
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
    </div>
  );
};
